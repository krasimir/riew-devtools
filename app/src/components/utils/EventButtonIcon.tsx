import React from 'react';
import { SnapshotAction } from '../../types';
import { Container } from './ui';
import Tooltip from '../Tooltip';
import Details, { IsCurrent } from '../Details';

export default function EventButtonIcon({
  action,
  children,
}: {
  action: SnapshotAction;
  children: JSX.Element[];
}) {
  return (
    <IsCurrent action={action}>
      {(isCurrent: boolean) => (
        <Container
          onMouseEnter={() => Tooltip.show(action)}
          onMouseLeave={() => Tooltip.hide()}
          onClick={() => Details.show(action)}
          style={isCurrent ? { border: 'solid 1px red' } : {}}
        >
          {children}
        </Container>
      )}
    </IsCurrent>
  );
}
