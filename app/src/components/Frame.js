import React from 'react';
import PropTypes from 'prop-types';

import { TYPES } from '../constants';
import ItemRiew from './ItemRiew';

export default function Frame({ event }) {
  // console.log(event);
  const { state } = event.snapshot;
  return (
    <>
      {state.map(item => {
        if (item.type === TYPES.RIEW) {
          return <ItemRiew data={item} key={item.id} />;
        }
        return null;
      })}
    </>
  );
}

Frame.propTypes = {
  event: PropTypes.object.isRequired,
};
