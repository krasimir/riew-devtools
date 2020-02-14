import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container } from '../ui';
import Actions from './Actions';
import ItemRiew from './ItemRiew';
import ItemChannel from './ItemChannel';
import ItemState from './ItemState';
import ItemRoutine from './ItemRoutine';
import ItemUnknown from './ItemUnknown';
import NewSession from './NewSession';
import Expander from './Expander';

import { Event, EventType, ItemType, Entity, ItemProps } from '../../types';

const EventWrapper = styled(Container)`
  border: solid 2px #4d4d4d;
`;
const EventItemContainer = styled.div<{ indent?: number }>`
  padding: 0.4em 0.6em 0.4em
    ${props => (props.indent ? props.indent + 0.6 : 0.6)}em;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

interface EventProps {
  event: Event;
}

function renderEntities(entities: Entity[], indent = 0): React.ReactNode {
  const getComponent = (type: ItemType): React.FC<ItemProps> =>
    ({
      [ItemType.RIEW]: ItemRiew,
      [ItemType.CHANNEL]: ItemChannel,
      [ItemType.STATE]: ItemState,
      [ItemType.ROUTINE]: ItemRoutine,
      [ItemType.UNRECOGNIZED]: ItemUnknown,
    }[type] || ItemUnknown);

  return entities.map(item => {
    const Component = getComponent(item.type);

    return (
      <Fragment key={item.id}>
        <EventItemContainer
          indent={indent}
          onClick={() => Expander.toggle(item.id)}
        >
          <Component data={item} />
        </EventItemContainer>
        {item.children && (
          <Expander id={item.id}>
            {renderEntities(item.children, indent + 1.4)}
          </Expander>
        )}
      </Fragment>
    );
  });
}

export default function EventUI({ event }: EventProps) {
  if (event.snapshot) {
    const { state, actions } = event.snapshot;
    return (
      <EventWrapper>
        {renderEntities(state)}
        <Actions actions={actions} />
      </EventWrapper>
    );
  }
  switch (event.type) {
    case EventType.RIEW_NEW_SESSION:
      return (
        <EventWrapper>
          <EventItemContainer>
            <NewSession />
          </EventItemContainer>
        </EventWrapper>
      );
    default:
      return <EventWrapper>{event.type}</EventWrapper>;
  }
}

EventUI.propTypes = {
  event: PropTypes.object.isRequired,
};
