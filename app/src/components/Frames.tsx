import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  FrameItemContainer,
  Container,
  RowsContainer,
  Table,
} from './utils/ui';
import getEntityComponent from './utils/getEntityComponent';
import Row from './frame/Row';
import Expander from './Expander';

import { Event, Entity, GraphRowItem } from '../types';

interface EventProps {
  columns: Event[];
  rows: GraphRowItem[];
}

type Row = Entity & {
  indent?: 0;
};

interface RenderEntitiesType {
  entities: GraphRowItem[];
  indent: number;
}
interface RenderColumnsType {
  entities: GraphRowItem[];
  columns: Event[];
}

function renderEntities(options: RenderEntitiesType): React.ReactNode {
  const { entities, indent } = options;
  return entities.map(item => {
    const Component = getEntityComponent(item.type);

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
    } else if (body.scrollLeft === body.scrollWidth - body.clientWidth) {
      snap(true);
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
      <Table m="0 0 0 180px">
        <tbody>{renderColumns({ entities: rows, columns })}</tbody>
      </Table>
    </Container>
  );
}

Frames.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};
