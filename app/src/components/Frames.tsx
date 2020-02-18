import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FrameItemContainer, FramesWrapper, Container } from './utils/ui';
import ItemRiew from './frame/ItemRiew';
import ItemChannel from './frame/ItemChannel';
import ItemState from './frame/ItemState';
import ItemRoutine from './frame/ItemRoutine';
import ItemUnknown from './frame/ItemUnknown';
import NewSession from './frame/NewSession';
import Expander from './Expander';

import {
  Event,
  EventType,
  ItemType,
  Entity,
  ItemProps,
  GraphRowItem,
} from '../types';

interface EventProps {
  columns: Event[];
  rows: GraphRowItem[];
}

type Row = Entity & {
  indent?: 0;
};

const getComponent = (type: ItemType): React.FC<ItemProps> =>
  ({
    [ItemType.RIEW]: ItemRiew,
    [ItemType.CHANNEL]: ItemChannel,
    [ItemType.STATE]: ItemState,
    [ItemType.ROUTINE]: ItemRoutine,
    [ItemType.UNRECOGNIZED]: ItemUnknown,
  }[type] || ItemUnknown);

function renderEntities(entities: GraphRowItem[], indent = 0): React.ReactNode {
  return entities.map(item => {
    const Component = getComponent(item.type);

    return (
      <Fragment key={item.rawId}>
        <FrameItemContainer
          indent={indent}
          onClick={() => Expander.toggle(item.id)}
        >
          <Component data={item as Entity} />
        </FrameItemContainer>
        {item.children && (
          <Expander id={item.id}>
            {renderEntities(item.children, indent + 1)}
          </Expander>
        )}
      </Fragment>
    );
  });
}

function renderActions(events: Event[]): React.ReactNode {
  const columns = [];
  for (let i = 0; i < events.length; i++) {
    columns.push(<div>{i}</div>);
  }
  return (
    <Container
      p={0}
      m={0}
      display="grid"
      columns={`repeat(${columns.length}, 1fr)`}
    >
      {columns}
    </Container>
  );
}

export default function Frames({ rows, columns }: EventProps) {
  console.log(rows);
  return (
    <FramesWrapper display="grid" columns="auto 1fr">
      <div>{renderEntities(rows)}</div>
      <div>foo</div>
    </FramesWrapper>
  );
  // switch (event.type) {
  //   case EventType.RIEW_NEW_SESSION:
  //     return (
  //       <FramesWrapper display="grid" columns="auto 1fr">
  //         <div>
  //           <NewSession />
  //         </div>
  //         <div></div>
  //       </FramesWrapper>
  //     );
  //   default:
  //     return <FramesWrapper>{event.type}</FramesWrapper>;
  // }
}

Frames.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};
