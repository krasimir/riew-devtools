import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  FrameItemContainer,
  Container,
  EntitiesList,
  EntityFrameContainer,
} from './utils/ui';
import getEntityComponent from './utils/getEntityComponent';
import Row from './frame/Row';
import Expander from './Expander';
import RiewFrame from './frame/RiewFrame';
import ChannelFrame from './frame/ChannelFrame';
import StateFrame from './frame/StateFrame';
import RoutineFrame from './frame/RoutineFrame';

import { Event, Entity, ItemType, EntityFrameProps } from '../types';

interface EventProps {
  frames: Event[];
  entities: Entity[];
}

type Row = Entity & {
  indent?: 0;
};

interface RenderEntitiesType {
  entities: Entity[];
  indent: number;
}

function UnknownEventButton() {
  return <EntityFrameContainer />;
}

const getEntityFrame = (type: ItemType): React.FC<EntityFrameProps> =>
  ({
    [ItemType.RIEW]: RiewFrame,
    [ItemType.CHANNEL]: ChannelFrame,
    [ItemType.STATE]: StateFrame,
    [ItemType.ROUTINE]: RoutineFrame,
    [ItemType.UNRECOGNIZED]: UnknownEventButton,
  }[type] || UnknownEventButton);

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

function renderFrame(frame: Event, entities: Entity[]): React.ReactNode {
  return entities.map(entity => {
    const EntityFrame = getEntityFrame(entity.type);

    return (
      <EntityFrameContainer key={entity.rawId}>
        <EntityFrame data={entity} actions={frame.snapshot} />
      </EntityFrameContainer>
    );
  });
}

export default function Frames({ entities, frames }: EventProps) {
  return (
    <>
      <EntitiesList>{renderEntities({ entities, indent: 0 })}</EntitiesList>
      <Container display="grid" columns={`repeat(${frames.length}, 1fr)`}>
        {frames.map(frame => renderFrame(frame, entities))}
      </Container>
    </>
  );
}

Frames.propTypes = {
  entities: PropTypes.array.isRequired,
  frames: PropTypes.array.isRequired,
};
