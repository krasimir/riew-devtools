import { RIEW_NEW_SESSION } from './constants';

export default function reducer(state, event) {
  if (event.type === RIEW_NEW_SESSION) {
    return [];
  }
  const newValue = state.concat([event]);
  return newValue;
}
