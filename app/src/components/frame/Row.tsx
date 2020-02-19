import React from 'react';
import { Container, RowEventButton } from '../utils/ui';
import {
  Entity,
  SnapshotAction,
  Event,
  ItemType,
  ItemProps,
} from '../../types';

export interface RowProps {
  data: Entity;
  columns: Event[];
}

function RiewEventButton() {
  return <RowEventButton color="#2a8778" />;
}
function ChannelEventButton() {
  return <RowEventButton color="#1e6a2d" />;
}
function StateEventButton() {
  return <RowEventButton color="#634834" />;
}
function RoutineEventButton() {
  return <RowEventButton color="#704040" />;
}
function UnknownEventButton() {
  return <RowEventButton />;
}

const getButton = (type: ItemType): React.FC<ItemProps> =>
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
        bb="solid 1px #555"
      >
        {columns.map((event, idx) => {
          const matchedAction: SnapshotAction | undefined = event.snapshot.find(
            action => action.who.rawId === data.rawId
          );
          if (matchedAction) {
            return (
              <div key={idx}>
                <Button data={data} />
              </div>
            );
          }
          return <div key={idx}></div>;
        })}
      </Container>
    </div>
  );
}
