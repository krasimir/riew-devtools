import { RIEW_NEW_SESSION } from './constants';
import { Event } from './types';

export default function reducer(state:Event[], event:Event):Event[] {
  if (event.type === RIEW_NEW_SESSION) {
    return [event];
  }
  const newValue = state.concat([event]);
  return newValue;
}
