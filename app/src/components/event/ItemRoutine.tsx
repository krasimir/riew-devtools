import React from 'react';
import PropTypes from 'prop-types';
import { CPU } from '../icons';
import { Routine } from '../../types';

interface ItemRoutineProps {
  routine: Routine;
}

export default function ItemRoutine({ routine }: ItemRoutineProps) {
  return (
    <>
      <CPU /> {routine.name}
    </>
  );
}

ItemRoutine.propTypes = {
  routine: PropTypes.object.isRequired,
};
