import { Event, EventType, GraphRowItem } from '../../types';

export const initialState = { columns: [], rows: [], rowsCache: {} };

export type EventsState = {
  columns: Event[];
  rows: GraphRowItem[];
  rowsCache: Record<string, any>;
};

export default function graphReducer(
  state: EventsState,
  event: Event
): EventsState {
  if (event.type === EventType.RIEW_NEW_SESSION) {
    return initialState;
  }
  const columns = [...state.columns, event];
  let { rows } = state;

  event.snapshot.forEach(({ who }) => {
    if (!state.rowsCache[who.rawId]) {
      const graphRow = { ...who, children: [] } as GraphRowItem;
      state.rowsCache[who.rawId] = graphRow;
      if (graphRow.parent && state.rowsCache[graphRow.parent]) {
        state.rowsCache[graphRow.parent].children.push(graphRow);
      } else {
        rows.push(graphRow);
      }
      if (who.children && who.children.length > 0) {
        who.children.forEach(child => {
          rows = rows.filter(r => {
            if (r.rawId === child.rawId) {
              graphRow.children.push(r);
              return false;
            }
            return true;
          });
        });
      }
    }
  });

  return {
    columns,
    rows,
    rowsCache: state.rowsCache,
  };
}
