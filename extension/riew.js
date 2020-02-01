chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log('Message arrived: ', message, sender, sendResponse);
  sendResponse('received');
  return true;
});
