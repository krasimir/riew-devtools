import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container, COLORS } from '../ui';
import Actions from './Actions';
import ItemRiew from './ItemRiew';
import ItemNewSession from './ItemNewSession';
import { Event, EventType, ItemType } from '../../types';

const EventWrapper = styled(Container)`
  border: solid 2px #4d4d4d;
`;
const EventItemContainer = styled.div`
  padding: 0.4em 0.6em;
  background: ${COLORS.grey2};
  border-bottom: solid 1px ${COLORS.grey1};
  cursor: pointer;
  &:hover {
    background: ${COLORS.grey1};
  }
`;

interface EventProps {
  event: Event;
}

export default function EventUI({ event }: EventProps) {
  if (event.snapshot) {
    const { state, actions } = event.snapshot;
    return (
      <EventWrapper>
        {state.map(item => {
          if (item.type === ItemType.RIEW) {
            return (
              <EventItemContainer key={item.id}>
                <ItemRiew riew={item} />
              </EventItemContainer>
            );
          }
          return null;
        })}
        <Actions actions={actions} />
      </EventWrapper>
    );
  }
  switch (event.type) {
    case EventType.RIEW_NEW_SESSION:
      return (
        <EventWrapper>
          <EventItemContainer>
            <ItemNewSession />
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
