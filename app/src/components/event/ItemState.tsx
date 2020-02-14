import React from 'react';
import PropTypes from 'prop-types';
import { Database } from '../icons';
import { State } from '../../types';

interface ItemStateProps {
  state: State;
}

export default function ItemState({ state }: ItemStateProps) {
  return (
    <>
      <Database /> {state.name}
    </>
  );
}

ItemState.propTypes = {
  state: PropTypes.object.isRequired,
};
