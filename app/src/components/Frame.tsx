import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { EventItemContainer, EventWrapper, Dim, Separator } from './utils/ui';
import what2HumanReadable from '../utils/what2HumanReadable';
import { Tool } from './utils/icons';
import ItemRiew from './frame/ItemRiew';
import ItemChannel from './frame/ItemChannel';
import ItemState from './frame/ItemState';
import ItemRoutine from './frame/ItemRoutine';
import ItemUnknown from './frame/ItemUnknown';
import NewSession from './frame/NewSession';
import Expander from './Expander';
import Details from './frame/Details';

import {
  Event,
  EventType,
  ItemType,
  Entity,
  ItemProps,
  SnapshotAction,
} from '../types';
import useExpander from './hooks/useExpander';

interface EventProps {
  event: Event;
}

const getComponent = (type: ItemType): React.FC<ItemProps> =>
  ({
    [ItemType.RIEW]: ItemRiew,
    [ItemType.CHANNEL]: ItemChannel,
    [ItemType.STATE]: ItemState,
    [ItemType.ROUTINE]: ItemRoutine,
    [ItemType.UNRECOGNIZED]: ItemUnknown,
  }[type] || ItemUnknown);

function renderEntities(entities: Entity[], indent = 0): React.ReactNode {
  return entities.map(item => {
    const Component = getComponent(item.type);

    return (
      <Fragment key={item.id}>
        <EventItemContainer
          indent={indent}
          onClick={() => {
            Expander.toggle(item.id);
            Details.show(item);
          }}
        >
          <Component data={item} />
        </EventItemContainer>
        {item.children && (
          <Expander id={item.id}>
            {renderEntities(item.children, indent + 1)}
          </Expander>
        )}
      </Fragment>
    );
  });
}

export default function Frame({ event }: EventProps) {
  const [expanded] = useExpander('actions');

  if (event.snapshot) {
    const { state, actions } = event.snapshot;
    return (
      <EventWrapper display="grid" columns="50% 50%">
        <div>
          {renderEntities(state)}
          <Separator />
          <EventItemContainer onClick={() => Expander.toggle('actions')}>
            <Dim>
              <Tool /> ({actions.length}){expanded ? '' : '…'}
            </Dim>
          </EventItemContainer>
          <Expander id="actions">
            {actions.map((action: SnapshotAction, idx: number) => {
              const Component = getComponent(action.who.type);
              const id = `${action.who.id}${idx}`;
              return (
                <Fragment key={id}>
                  <EventItemContainer onClick={() => Expander.toggle(id)}>
                    <Dim small>{what2HumanReadable(action.what)}</Dim>{' '}
                    <Component data={action.who} />
                  </EventItemContainer>
                  {action.who.children && (
                    <Expander id={id}>
                      {renderEntities(action.who.children, 1)}
                    </Expander>
                  )}
                </Fragment>
              );
            })}
            {/* <Actions actions={actions} /> */}
          </Expander>
        </div>
        <Details />
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
