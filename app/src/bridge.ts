import { Event, EventType, Entity, SnapshotAction } from './types';
import normalizeEntity from './utils/normalizeEntity';

const isItDevTools =
  typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined';

const DEBUG_ADD_EVENT_INTERVAL = 1;
const ECHO_EVENTS_TO_WINDOW = true;
let ids = 0;

declare global {
  interface Window {
    RIEW_DATA_COLLECTED: Record<string, any>[];
  }
}
window.RIEW_DATA_COLLECTED = [];

function normalizeActions(actions: SnapshotAction[]): SnapshotAction[] {
  return actions.map(action => {
    action.who = normalizeEntity(action.who as Entity);
    return action;
  });
}
function normalizeEvent(event?: Event): Event | undefined {
  if (!event) return;
  if (event.type === EventType.RIEW_NEW_SESSION) return event as Event;
  event.snapshot = normalizeActions(event.snapshot);
  return event as Event;
}

export default async function bridge(callback: Function): Promise<void> {
  if (isItDevTools) {
    chrome.runtime.onMessage.addListener(function(event, sender, sendResponse) {
      event.id = ++ids;
      if (ECHO_EVENTS_TO_WINDOW) {
        window.RIEW_DATA_COLLECTED.push(JSON.parse(JSON.stringify(event)));
      }
      callback(normalizeEvent(event));
      sendResponse('received');
    });
  } else {
    const mockData: Array<Event> = await fetch('_mock_/log.json').then(res =>
      res.json()
    );

    // mockData = mockData.filter((_, i) => i < 10);

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
