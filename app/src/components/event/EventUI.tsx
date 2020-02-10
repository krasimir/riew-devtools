import React from 'react';
import PropTypes from 'prop-types';
import styled, { StyledComponent } from 'styled-components';

import { TYPES, RIEW_NEW_SESSION } from '../../constants';
import { Container } from '../ui';
import Actions from './Actions';
import ItemRiew from './ItemRiew';
import ItemNewSession from './ItemNewSession';
import { Event } from '../../types';

const EventWrapper = styled(Container)`
  border: solid 2px #4d4d4d;
`;

interface EventProps {
  event: Event
}

export default function EventUI({ event }:EventProps):JSX.Element {
  if (event.snapshot) {
    const { state, actions } = event.snapshot;
    return (
      <EventWrapper>
        {state.map(item => { 
          if (item.type === TYPES.RIEW) {
            return <ItemRiew data={item} key={item.id} />;
          }
          return null;
        })}
        <Actions actions={actions} />
      </EventWrapper>
    );
  }
  switch (event.type) {
    case RIEW_NEW_SESSION:
      return (
        <EventWrapper>
          <ItemNewSession />
        </EventWrapper>
      );
    default:
      return (
        <EventWrapper>
          {event.type}
        </EventWrapper>
      );
  }
}

EventUI.propTypes = {
  event: PropTypes.object.isRequired,
};
