/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import { RowEventButton, EventColumnIdx, Container } from '../utils/ui';
import { LogIn, Upload, XCircle, Circle, CirclePlus } from '../utils/icons';
import { EventButtonProps, What } from '../../types';
import Tooltip from '../Tooltip';

export default function ChannelEventButton({
  data,
  actions,
}: EventButtonProps) {
  const icons = actions
    .map(({ what, meta, who }, idx) => {
      if (who.rawId !== data.rawId) return null;
      const style = { color: 'black' };
      switch (what) {
        case What.CHANNEL_PUT_INITIATED:
          return (
            <Container key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <LogIn style={{ ...style, opacity: 0.4 }} />
            </Container>
          );
        case What.CHANNEL_PUT_RESOLVED:
          return (
            <Container key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <LogIn style={style} />
            </Container>
          );
        case What.CHANNEL_TAKE_INITIATED:
          return (
            <Container key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Upload style={{ ...style, opacity: 0.4 }} />
            </Container>
          );
        case What.CHANNEL_TAKE_RESOLVED:
          return (
            <Container key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Upload style={style} />
            </Container>
          );
        case What.CHANNEL_CREATED:
          return (
            <Container key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <CirclePlus style={style} />
            </Container>
          );
        case What.CHANNEL_CLOSED:
          return (
            <Container key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <XCircle style={style} />
            </Container>
          );
        case What.CHANNEL_RESET:
          return (
            <Container key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Circle style={style} />
            </Container>
          );
        default:
          return null;
      }
    })
    .filter(i => i);

  return (
    <RowEventButton
      color="#1e6a2d"
      data-id={data.rawId}
      columns={`repeat(${icons.length}, 1fr)`}
      onMouseEnter={() => Tooltip.show(data)}
      onMouseLeave={() => Tooltip.hide()}
    >
      {icons.length > 0 && icons}
    </RowEventButton>
  );
}
