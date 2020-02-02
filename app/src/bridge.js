const isItDevTools =
  typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined';

export default async function bridge(callback) {
  if (isItDevTools) {
    chrome.runtime.onMessage.addListener(function(
      message,
      sender,
      sendResponse
    ) {
      callback(message);
      sendResponse('received');
    });
  } else {
    const mockData = await fetch('_mock_/log.json').then(res => res.json());

    (function push() {
      if (mockData.length > 0) {
        callback(mockData.shift());
        setTimeout(push, Math.random() * 500);
      }
    })();
  }
}
