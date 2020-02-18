import { Event, EventType, Entity } from '../../types';

export const initialState = { columns: [], rows: [], rowsKeys: {} };

export type EventsState = {
  columns: Event[];
  rows: Entity[];
  rowsKeys: Record<string, boolean>;
};

export default function graphReducer(
  state: EventsState,
  event: Event
): EventsState {
  if (event.type === EventType.RIEW_NEW_SESSION) {
    return initialState;
  }
  const rows = [...state.rows];
  const columns = [...state.columns, event];

  event.snapshot.forEach(({ who }) => {
    if (!state.rowsKeys[who.rawId]) {
      state.rowsKeys[who.rawId] = true;
      if (!who.parent || who.parent === null) {
        rows.push(who);
      }
    }
  });

  return {
    columns,
    rows,
    rowsKeys: state.rowsKeys,
  };
}
