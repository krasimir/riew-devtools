import { Event, EventType, Entity } from '../../types';

export const initialState = { frames: [], entities: [], rowsCache: {} };

export type EventsState = {
  frames: Event[];
  entities: Entity[];
  rowsCache: Record<string, any>;
};

export default function graphReducer(
  state: EventsState,
  event: Event
): EventsState {
  if (event.type === EventType.RIEW_NEW_SESSION) {
    return { frames: [], entities: [], rowsCache: {} };
  }
  const frames = [...state.frames, event];
  let { entities } = state;

  event.snapshot.forEach(({ who }) => {
    if (!state.rowsCache[who.rawId]) {
      const graphEntity = {
        ...who,
        children: [],
      } as Entity;
      state.rowsCache[who.rawId] = graphEntity;
      if (graphEntity.parent && state.rowsCache[graphEntity.parent]) {
        state.rowsCache[graphEntity.parent].children.push(graphEntity);
      } else {
        entities.push(graphEntity);
      }
      if (who.children && who.children.length > 0) {
        who.children.forEach(child => {
          entities = entities.filter(r => {
            if (r.rawId === child.rawId) {
              if (graphEntity.children) graphEntity.children.push(r);
              return false;
            }
            return true;
          });
        });
      }
    }
  });

  return {
    frames,
    entities,
    rowsCache: state.rowsCache,
  };
}
