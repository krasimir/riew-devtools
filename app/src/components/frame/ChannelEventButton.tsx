/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import { RowEventButton, EventColumnIdx } from '../utils/ui';
import { LogIn, Upload, XCircle, Circle, CirclePlus } from '../utils/icons';
import { EventButtonProps, What } from '../../types';
import EventButtonIcon from '../utils/EventButtonIcon';

export default function ChannelEventButton({
  data,
  actions,
}: EventButtonProps) {
  const icons = actions
    .map((action, idx) => {
      const { what, who } = action;

      if (who.rawId !== data.rawId) return null;
      const style = { color: 'black' };
      switch (what) {
        case What.CHANNEL_PUT_INITIATED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <LogIn style={{ ...style, opacity: 0.4 }} />
            </EventButtonIcon>
          );
        case What.CHANNEL_PUT_RESOLVED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <LogIn style={style} />
            </EventButtonIcon>
          );
        case What.CHANNEL_TAKE_INITIATED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Upload style={{ ...style, opacity: 0.4 }} />
            </EventButtonIcon>
          );
        case What.CHANNEL_TAKE_RESOLVED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Upload style={style} />
            </EventButtonIcon>
          );
        case What.CHANNEL_CREATED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <CirclePlus style={style} />
            </EventButtonIcon>
          );
        case What.CHANNEL_CLOSED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <XCircle style={style} />
            </EventButtonIcon>
          );
        case What.CHANNEL_RESET:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Circle style={style} />
            </EventButtonIcon>
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
    >
      {icons.length > 0 && icons}
    </RowEventButton>
  );
}
