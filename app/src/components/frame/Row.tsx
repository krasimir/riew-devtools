import React from 'react';
import { EntityFrameContainer, Container, FRAME_HEIGHT } from '../utils/ui';
import { Entity, Event, ItemType, EntityFrameProps, What } from '../../types';
import RiewEventButton from './RiewItem';
import ChannelEventButton from './ChannelItem';
import StateEventButton from './StateItem';
import RoutineEventButton from './RoutineItem';

export interface RowProps {
  entity: Entity;
  frames: Event[];
}
function UnknownEventButton() {
  return <EntityFrameContainer />;
}

const getButton = (type: ItemType): React.FC<EntityFrameProps> =>
  ({
    [ItemType.RIEW]: RiewEventButton,
    [ItemType.CHANNEL]: ChannelEventButton,
    [ItemType.STATE]: StateEventButton,
    [ItemType.ROUTINE]: RoutineEventButton,
    [ItemType.UNRECOGNIZED]: UnknownEventButton,
  }[type] || UnknownEventButton);

const EntityLifeCycle = {
  [ItemType.CHANNEL]: [What.CHANNEL_CREATED, What.CHANNEL_CLOSED],
  [ItemType.RIEW]: [What.RIEW_CREATED, What.RIEW_UNMOUNTED],
  [ItemType.ROUTINE]: [What.ROUTINE_STARTED, What.ROUTINE_END],
  [ItemType.STATE]: [What.STATE_CREATED, What.STATE_DESTROYED],
  [ItemType.UNRECOGNIZED]: [What.UNRECOGNIZED, What.UNRECOGNIZED],
};

const isCreated = (data: Entity, idx: number, frames: Event[]): boolean[] => {
  let created = false;
  for (let i = 0; i < frames.length; i++) {
    const frame: Event = frames[i];
    const resultForThisFrame = [];
    const lifecycle: What[] = EntityLifeCycle[data.type];
    if (lifecycle) {
      for (let j = 0; j < frame.snapshot.length; j++) {
        const {
          who: { rawId },
          what,
        } = frame.snapshot[j];
        if (rawId === data.rawId && what === lifecycle[0]) {
          created = true;
        }
        if (rawId === data.rawId && what === lifecycle[1]) {
          created = false;
        }
        resultForThisFrame.push(created);
      }
    }
    if (i === idx) {
      return resultForThisFrame;
    }
  }
  return [];
};

export default function Row({ entity, frames }: RowProps) {
  const Button = getButton(entity.type);
  return (
    <Container h={FRAME_HEIGHT} data-entity={entity.rawId}>
      {frames.map((frame, idx) => (
        <Button
          key={idx}
          data={entity}
          actions={frame.snapshot}
          created={isCreated(entity, idx, frames)}
        />
      ))}
    </Container>
  );
}
