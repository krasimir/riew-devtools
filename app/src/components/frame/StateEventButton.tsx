import React from 'react';
import { RowEventButton, EventColumnIdx, Container } from '../utils/ui';
import { XCircle, Download, CirclePlus } from '../utils/icons';
import { EventButtonProps, What } from '../../types';

export default function StateEventButton({ data, actions }: EventButtonProps) {
  const icons = actions
    .map(({ what, meta, who }, idx) => {
      if (who.rawId !== data.rawId) return null;
      const style = { color: 'black' };
      switch (what) {
        case What.STATE_VALUE_SET:
          return (
            <Container key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Download style={style} />
            </Container>
          );
        case What.STATE_DESTROYED:
          return (
            <Container key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <XCircle style={style} />
            </Container>
          );
        case What.STATE_CREATED:
          return (
            <Container key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <CirclePlus style={style} />
            </Container>
          );
        default:
          return null;
      }
    })
    .filter(i => i);

  return (
    <RowEventButton
      color="#6d8039"
      data-id={data.rawId}
      columns={`repeat(${icons.length}, 1fr)`}
    >
      {icons.length > 0 && icons}
    </RowEventButton>
  );
}
