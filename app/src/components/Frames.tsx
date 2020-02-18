import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { FrameItemContainer, FramesWrapper } from './utils/ui';
import ItemRiew from './frame/ItemRiew';
import ItemChannel from './frame/ItemChannel';
import ItemState from './frame/ItemState';
import ItemRoutine from './frame/ItemRoutine';
import ItemUnknown from './frame/ItemUnknown';
import Expander from './Expander';

import { Event, ItemType, Entity, ItemProps, GraphRowItem } from '../types';

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

const getComponentRow = (type: ItemType): React.FC<ItemProps> =>
  ({
    [ItemType.RIEW]: ItemRiew,
    [ItemType.CHANNEL]: ItemChannel,
    [ItemType.STATE]: ItemState,
    [ItemType.ROUTINE]: ItemRoutine,
    [ItemType.UNRECOGNIZED]: ItemUnknown,
  }[type] || ItemUnknown);

function renderEntities(
  entities: GraphRowItem[],
  indent = 0,
  componentResolver: Function = getComponent
): React.ReactNode {
  return entities.map(item => {
    const Component = componentResolver(item.type);

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
            {renderEntities(item.children, indent + 1, componentResolver)}
          </Expander>
        )}
      </Fragment>
    );
  });
}

export default function Frames({ rows, columns }: EventProps) {
  return (
    <FramesWrapper display="grid" columns="auto 1fr">
      <div>{renderEntities(rows)}</div>
      <div>{renderEntities(rows, 0, getComponentRow)}</div>
    </FramesWrapper>
  );
}

Frames.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};
