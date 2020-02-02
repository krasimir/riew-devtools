const isItDevTools =
  typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined';

let ids = 1;

export default async function bridge(callback) {
  if (isItDevTools) {
    chrome.runtime.onMessage.addListener(function(event, sender, sendResponse) {
      event.id = btoa(++ids);
      callback(event);
      sendResponse('received');
    });
  } else {
    const mockData = await fetch('_mock_/log.json').then(res => res.json());

    (function push() {
      if (mockData.length > 0) {
        const event = mockData.shift();

        event.id = btoa(++ids);
        callback(event);
        setTimeout(push, Math.random() * 100);
      }
    })();
  }
}
