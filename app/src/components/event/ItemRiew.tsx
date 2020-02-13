import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../icons';
import { Riew } from '../../types';

interface ItemRiewProps {
  riew: Riew;
}

export default function ItemRiew({ riew }: ItemRiewProps) {
  return (
    <>
      <Box /> &lt;{riew.name}&gt;
    </>
  );
}

ItemRiew.propTypes = {
  riew: PropTypes.object.isRequired,
};
