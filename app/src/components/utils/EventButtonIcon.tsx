import React from 'react';
import { SnapshotAction } from '../../types';
import { Container } from './ui';
import Tooltip from '../Tooltip';
import Details from '../Details';

export default function EventButtonIcon({
  action,
  children,
}: {
  action: SnapshotAction;
  children: JSX.Element[];
}) {
  return (
    <Container
      onMouseEnter={() => Tooltip.show(action)}
      onMouseLeave={() => Tooltip.hide()}
      onClick={() => Details.show(action)}
    >
      {children}
    </Container>
  );
}
