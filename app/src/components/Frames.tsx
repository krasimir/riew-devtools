import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { FrameItemContainer, Container, RowsContainer } from './utils/ui';
import ItemRiew from './frame/ItemRiew';
import ItemChannel from './frame/ItemChannel';
import ItemState from './frame/ItemState';
import ItemRoutine from './frame/ItemRoutine';
import ItemUnknown from './frame/ItemUnknown';
import Row from './frame/Row';
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

interface RenderEntitiesType {
  entities: GraphRowItem[];
  indent: number;
}
interface RenderColumnsType {
  entities: GraphRowItem[];
  columns: Event[];
}

function renderColumns(options: RenderColumnsType): React.ReactNode {
  const { entities, columns } = options;
  return entities.map(item => (
    <Fragment key={item.rawId}>
      <Row data={item as Entity} columns={columns} />
      {item.children && (
        <Expander id={item.id}>
          {renderColumns({
            entities: item.children,
            columns,
          })}
        </Expander>
      )}
    </Fragment>
  ));
}

function renderEntities(options: RenderEntitiesType): React.ReactNode {
  const { entities, indent } = options;
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
            {renderEntities({
              entities: item.children,
              indent: indent + 1,
            })}
          </Expander>
        )}
      </Fragment>
    );
  });
}

export default function Frames({ rows, columns }: EventProps) {
  const [snapScrolling, snap] = useState(true);
  const { body } = document;

  useEffect(() => {
    body.addEventListener('scroll', () => {
      snap(body.scrollLeft === body.scrollWidth - body.clientWidth);
    });
  }, [body]);

  useEffect(() => {
    if (snapScrolling) {
      body.scrollLeft = body.scrollWidth - body.clientWidth;
    }
  }, [
    body.clientWidth,
    body.scrollLeft,
    body.scrollWidth,
    columns.length,
    snapScrolling,
  ]);
  return (
    <Container>
      <RowsContainer>
        {renderEntities({ entities: rows, indent: 0 })}
      </RowsContainer>
      <Container m="0 0 0 180px">
        {renderColumns({
          entities: rows,
          columns,
        })}
      </Container>
    </Container>
  );
}

Frames.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};
