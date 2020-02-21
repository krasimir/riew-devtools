import React from 'react';
import { RowEventButton, EventColumnIdx, Container } from '../utils/ui';
import {
  Download,
  Upload,
  Image,
  ArrowRightCircle,
  CirclePlus,
} from '../utils/icons';
import { EventButtonProps, What } from '../../types';

export default function RiewEventButton({ data, actions }: EventButtonProps) {
  const icons = actions
    .map(({ what, meta, who }, idx) => {
      if (who.rawId !== data.rawId) return null;
      const style = { color: 'black' };
      switch (what) {
        case What.RIEW_RENDERED:
          return (
            <Container key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Image style={style} />
            </Container>
          );
        case What.RIEW_MOUNTED:
          return (
            <Container key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Download style={style} />
            </Container>
          );
        case What.RIEW_UNMOUNTED:
          return (
            <Container key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Upload style={style} />
            </Container>
          );
        case What.RIEW_UPDATED:
          return (
            <Container key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <ArrowRightCircle style={style} />
            </Container>
          );
        case What.RIEW_CREATED:
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
      color="#2a8778"
      data-id={data.rawId}
      columns={`repeat(${icons.length}, 1fr)`}
    >
      {icons.length > 0 && icons}
    </RowEventButton>
  );
}
