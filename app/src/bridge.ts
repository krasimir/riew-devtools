import { Event, EventType, Entity } from './types';
import normalizeEntity from './utils/normalizeEntity';

const isItDevTools =
  typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined';

const DEBUG_ADD_EVENT_INTERVAL = 10;
let ids = 0;

// declare global {
//   interface Window {
//     RIEW_DATA_COLLECTED: Record<string, any>[];
//   }
// }
// window.RIEW_DATA_COLLECTED = [];

function normalizeState(entities: Record<string, any>[]): void {
  for (let i = 0; i < entities.length; i++) {
    entities[i] = normalizeEntity(entities[i] as Entity);
    if (entities[i].children) {
      normalizeState(entities[i].children);
    }
  }
}
function normalizeActions(actions: Record<string, any>[]): void {
  if (!event) return;
  for (let i = 0; i < actions.length; i++) {
    actions[i].who = normalizeEntity(actions[i].who as Entity);
  }
}
function normalizeEvent(event?: Record<string, any>): Event | undefined {
  if (!event) return;
  if (event.type === EventType.RIEW_NEW_SESSION) return event as Event;
  normalizeState(event.snapshot.state);
  normalizeActions(event.snapshot.actions);
  return event as Event;
}

export default async function bridge(callback: Function): Promise<void> {
  if (isItDevTools) {
    chrome.runtime.onMessage.addListener(function(event, sender, sendResponse) {
      event.id = ++ids;
      // window.RIEW_DATA_COLLECTED.push(JSON.parse(JSON.stringify(event)));
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
