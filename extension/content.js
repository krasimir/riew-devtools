/* eslint-disable no-restricted-globals */
let isFirstMessage = true;

function getOrigin() {
  if (typeof location !== 'undefined' && location.protocol && location.host) {
    return `${location.protocol}//${location.host}`;
  }
  return '';
}
function enhanceEvent(message) {
  return {
    source: 'riew',
    time: new Date().getTime(),
    origin: getOrigin(),
    ...message,
  };
}
function send(message) {
  try {
    chrome.runtime.sendMessage(message);
  } catch (error) {
    // console.error(error);
  }
}

window.addEventListener('message', function(event) {
  const message = event.data;

  if (message.source !== 'riew') return;
  if (isFirstMessage) {
    send(enhanceEvent({ type: 'RIEW_NEW_SESSION' }));
    isFirstMessage = false;
  }
  send(message);
});
