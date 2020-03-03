import React, { useState } from 'react';
import { SnapshotAction } from '../../types';
import { Container, TooltipContainer, FRAME_HEIGHT } from './ui';
import Details, { toFriendlyWhat } from '../Details';

export default function EventButtonIcon({
  action,
  children,
}: {
  action: SnapshotAction;
  children: JSX.Element;
}) {
  const [tooltip, setTooltip] = useState<SnapshotAction | null>(null);
  return (
    <Container
      onMouseEnter={() => setTooltip(action)}
      onMouseLeave={() => setTooltip(null)}
      onClick={() => Details.show(action)}
      h={FRAME_HEIGHT}
    >
      {tooltip && (
        <TooltipContainer>{toFriendlyWhat(tooltip.what)}</TooltipContainer>
      )}
      {children}
    </Container>
  );
}
