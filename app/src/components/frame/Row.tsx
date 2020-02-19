import React from 'react';
import { Container, RowEventButton, NoEventPlaceholder } from '../utils/ui';
import { ArrowDownCircle } from '../utils/icons';
import {
  Entity,
  SnapshotAction,
  Event,
  ItemType,
  EventButtonProps,
  What,
} from '../../types';

export interface RowProps {
  data: Entity;
  columns: Event[];
}

function RiewEventButton({ data, what, meta }: EventButtonProps) {
  let Icon = null;
  switch (what) {
    case What.RIEW_MOUNTED:
      Icon = ArrowDownCircle;
      break;
    // case What.RIEW_RENDERED:
    //   Icon = ArrowDownCircle;
    //   break;
    default:
      break;
  }
  return (
    <RowEventButton color="#2a8778">
      {Icon && <Icon size={22} />}
    </RowEventButton>
  );
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
          const matchedAction: SnapshotAction | undefined = event.snapshot.find(
            action => action.who.rawId === data.rawId
          );
          if (matchedAction) {
            return (
              <div key={idx}>
                <Button
                  data={data}
                  what={matchedAction.what}
                  meta={matchedAction.meta}
                />
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
