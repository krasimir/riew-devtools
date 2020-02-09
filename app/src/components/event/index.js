import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TYPES, RIEW_NEW_SESSION } from '../../constants';
import { Container } from '../ui';
import Actions from './Actions';
import ItemRiew from './ItemRiew';
import ItemNewSession from './ItemNewSession';

const EventWrapper = styled(Container)`
  border: solid 2px #4d4d4d;
`;

export default function Event({ event }) {
  if (event.snapshot) {
    const { state, actions } = event.snapshot;
    // console.log(event.snapshot);
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
      return event.type;
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
};
