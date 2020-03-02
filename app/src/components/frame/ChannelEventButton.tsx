/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import { RowEventButton, EventColumnIdx } from '../utils/ui';
import { EventButtonProps, What } from '../../types';
import EventButtonIcon from '../utils/EventButtonIcon';

export default function ChannelEventButton({
  data,
  actions,
}: EventButtonProps) {
  let created = false;
  const icons = actions
    .map((action, idx) => {
      const { what, who } = action;

      if (who.rawId !== data.rawId)
        return (
          <img
            key={idx}
            src={created ? './img/app_channel_0.jpg' : './img/app_empty.jpg'}
          />
        );
      switch (what) {
        case What.CHANNEL_PUT_INITIATED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_channel_put_initiated.jpg" />
            </EventButtonIcon>
          );
        case What.CHANNEL_PUT_RESOLVED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_channel_put_resolved.jpg" />
            </EventButtonIcon>
          );
        case What.CHANNEL_TAKE_INITIATED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_channel_take_initiated.jpg" />
            </EventButtonIcon>
          );
        case What.CHANNEL_TAKE_RESOLVED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_channel_take_resolved.jpg" />
            </EventButtonIcon>
          );
        case What.CHANNEL_CREATED:
          created = true;
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_channel_created.jpg" />
            </EventButtonIcon>
          );
        case What.CHANNEL_CLOSED:
          created = false;
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_channel_put_close.jpg" />
            </EventButtonIcon>
          );
        case What.CHANNEL_RESET:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_channel_reset.jpg" />
            </EventButtonIcon>
          );
        case What.CHANNEL_LISTEN:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_channel_listen.jpg" />
            </EventButtonIcon>
          );
        default:
          return (
            <img
              key={idx}
              src={created ? './img/app_channel_0.jpg' : './img/app_empty.jpg'}
            />
          );
      }
    })
    .filter(i => i);

  return (
    <RowEventButton
      data-id={data.rawId}
      columns={`repeat(${actions.length}, 1fr)`}
    >
      {icons.length > 0 && icons}
    </RowEventButton>
  );
}
