import { Event } from './types';

const isItDevTools =
  typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined';

const DEBUG_ADD_EVENT_INTERVAL = 10;
let ids = 0;

export default async function bridge(callback:Function) {
  if (isItDevTools) {
    chrome.runtime.onMessage.addListener(function(event, sender, sendResponse) {
      event.id = ++ids;
      callback(event);
      sendResponse('received');
    });
  } else {
    const mockData:Array<Event> = await fetch('_mock_/log.json').then(res => res.json());

    (function push() {
      if (mockData.length > 0) {
        const event = mockData.shift();

        if (event) {
          event.id = ++ids;
        }
        callback(event);
        setTimeout(push, Math.random() * DEBUG_ADD_EVENT_INTERVAL);
      }
    })();
  }
}
