import { Event, EventType } from './types';

export default function reducer(state:Event[], event:Event):Event[] {
  if (event.type === EventType.RIEW_NEW_SESSION) {
    return [event];
  }
  const newValue = state.concat([event]);
  return newValue;
}
