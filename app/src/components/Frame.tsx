import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { EventItemContainer, EventWrapper, EventSeparator } from './utils/ui';
import Actions from './frame/Actions';
import ItemRiew from './frame/ItemRiew';
import ItemChannel from './frame/ItemChannel';
import ItemState from './frame/ItemState';
import ItemRoutine from './frame/ItemRoutine';
import ItemUnknown from './frame/ItemUnknown';
import NewSession from './frame/NewSession';
import Expander from './frame/Expander';

import { Event, EventType, ItemType, Entity, ItemProps } from '../types';

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

export default function Frame({ event }: EventProps) {
  if (event.snapshot) {
    const { state, actions } = event.snapshot;
    return (
      <EventWrapper>
        <EventSeparator text="state" />
        {renderEntities(state)}
        <EventSeparator text="actions" />
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

Frame.propTypes = {
  event: PropTypes.object.isRequired,
};
