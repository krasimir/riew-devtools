import React from 'react';
import { Container, RowEventButton, NoEventPlaceholder } from '../utils/ui';
import {
  Entity,
  SnapshotAction,
  Event,
  ItemType,
  EventButtonProps,
} from '../../types';
import RiewEventButton from './RiewEventButton';
import ChannelEventButton from './ChannelEventButton';
import StateEventButton from './StateEventButton';
import RoutineEventButton from './RoutineEventButton';

export interface RowProps {
  data: Entity;
  columns: Event[];
}
function UnknownEventButton() {
  return <RowEventButton />;
}

const getButton = (type: ItemType): React.FC<EventButtonProps> =>
  ({
    [ItemType.RIEW]: RiewEventButton,
    [ItemType.CHANNEL]: ChannelEventButton,
    [ItemType.STATE]: StateEventButton,
    [ItemType.ROUTINE]: RoutineEventButton,
    [ItemType.UNRECOGNIZED]: UnknownEventButton,
  }[type] || UnknownEventButton);

export default function Row({ data, columns }: RowProps) {
  const Button = getButton(data.type);
  return (
    <div>
      <Container
        p={0}
        m={0}
        display="grid"
        columns={`repeat(${columns.length}, 35px)`}
        h={35}
        w={35 * columns.length}
      >
        {columns.map((event, idx) => {
          const matchedActions: SnapshotAction[] = event.snapshot.filter(
            action => action.who.rawId === data.rawId
          );
          if (matchedActions.length > 0) {
            return (
              <div key={idx}>
                <Button data={data} actions={matchedActions} />
              </div>
            );
          }
          return (
            <div key={idx}>
              <NoEventPlaceholder />
            </div>
          );
        })}
      </Container>
    </div>
  );
}
