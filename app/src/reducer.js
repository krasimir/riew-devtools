import { MAX_EVENTS, RIEW_NEW_SESSION } from './constants';

export default function reducer(state, event) {
  if (event.type === RIEW_NEW_SESSION) {
    return [];
  }
  const newValue = state.concat([event]);
  if (newValue.length > MAX_EVENTS) {
    newValue.shift();
  }
  return newValue;
}
