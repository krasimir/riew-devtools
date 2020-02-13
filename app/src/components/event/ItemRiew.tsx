import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '../ui';
import { Box } from '../icons';
import { Riew } from '../../types';

const Container = styled.div`
  padding: 0.4em 0.6em;
  background: ${COLORS.grey2};
  border-bottom: solid 1px ${COLORS.grey1};
  cursor: pointer;
  &:hover {
    background: ${COLORS.grey1};
  }
`;

interface ItemRiewProps {
  data: Riew;
}

export default function ItemRiew({ data }: ItemRiewProps) {
  return (
    <Container>
      <Box /> &lt;{data.name}&gt;
    </Container>
  );
}

ItemRiew.propTypes = {
  data: PropTypes.object.isRequired,
};
