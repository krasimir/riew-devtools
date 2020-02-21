import React from 'react';
import {
  RowEventButton,
  NoEventPlaceholder,
  TR,
  TD,
  FRAME_HEIGHT,
} from '../utils/ui';
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
    <TR h={FRAME_HEIGHT}>
      {columns.map((event, idx) => {
        const matchedActions: SnapshotAction[] = event.snapshot.filter(
          action => action.who.rawId === data.rawId
        );
        if (matchedActions.length > 0) {
          return (
            <TD key={idx}>
              <Button data={data} actions={event.snapshot} />
            </TD>
          );
        }
        return (
          <TD key={idx} br="solid 1px #2a2a2a">
            <NoEventPlaceholder />
          </TD>
        );
      })}
    </TR>
  );
}
