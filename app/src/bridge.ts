import { Event, EventType, Entity } from './types';
import normalizeEntity from './utils/normalizeEntity';

const isItDevTools =
  typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined';

const DEBUG_ADD_EVENT_INTERVAL = 10;
let ids = 0;

function findWho(id: string, entities: Entity[]): Entity | undefined {
  for (let i = 0; i < entities.length; i++) {
    if (id === entities[i].rawId) {
      return entities[i];
    }
    if (entities[i].children) {
      const res = findWho(id, entities[i].children || []);
      if (res) {
        return res;
      }
    }
  }
}
function normalizeState(entities: Record<string, any>[]): void {
  for (let i = 0; i < entities.length; i++) {
    entities[i] = normalizeEntity(entities[i] as Entity);
    if (entities[i].children) {
      normalizeState(entities[i].children);
    }
  }
}
function normalizeActions(event?: Record<string, any>): void {
  if (!event) return;
  event.snapshot.actions = event.snapshot.actions.map(
    (action: { id: string; who: string | Entity }) => {
      const who = findWho(action.who as string, event.snapshot.state);
      if (who) {
        action.who = who;
      }
      return action;
    }
  );
}
function normalizeEvent(event?: Record<string, any>): Event | undefined {
  if (!event) return;
  if (event.type === EventType.RIEW_NEW_SESSION) return event as Event;
  normalizeState(event.snapshot.state);
  normalizeActions(event);
  return event as Event;
}

export default async function bridge(callback: Function): Promise<void> {
  if (isItDevTools) {
    chrome.runtime.onMessage.addListener(function(event, sender, sendResponse) {
      event.id = ++ids;
      callback(normalizeEvent(event));
      sendResponse('received');
    });
  } else {
    const mockData: Array<Event> = await fetch('_mock_/log.json').then(res =>
      res.json()
    );

    (function push(): void {
      if (mockData.length > 0) {
        const event = mockData.shift();

        if (event) {
          event.id = ++ids;
        }
        callback(normalizeEvent(event));
        setTimeout(push, Math.random() * DEBUG_ADD_EVENT_INTERVAL);
      }
    })();
  }
}
