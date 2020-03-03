/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import { RowEventButton, Empty } from '../utils/ui';
import { CIcon } from '../utils/icons';
import { EventButtonProps, What } from '../../types';
import EventButtonIcon from '../utils/EventButtonIcon';

const COLOR = '#429dd6';

export default function ChannelEventButton({
  data,
  actions,
  created,
}: EventButtonProps) {
  const icons = actions
    .map((action, idx) => {
      const { what, who } = action;

      if (who.rawId !== data.rawId) {
        return <Empty created={created && created[idx]} color={COLOR} />;
      }
      switch (what) {
        case What.CHANNEL_PUT_INITIATED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="push-chevron-down" />
            </EventButtonIcon>
          );
        case What.CHANNEL_PUT_RESOLVED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="push-down" />
            </EventButtonIcon>
          );
        case What.CHANNEL_TAKE_INITIATED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="push-chevron-up" />
            </EventButtonIcon>
          );
        case What.CHANNEL_TAKE_RESOLVED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="push-up" />
            </EventButtonIcon>
          );
        case What.CHANNEL_CREATED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="add" />
            </EventButtonIcon>
          );
        case What.CHANNEL_CLOSED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="close" />
            </EventButtonIcon>
          );
        case What.CHANNEL_RESET:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="undo" />
            </EventButtonIcon>
          );
        case What.CHANNEL_LISTEN:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="headset" />
            </EventButtonIcon>
          );
        default:
          return <Empty created={created && created[idx]} color={COLOR} />;
      }
    })
    .filter(i => i);

  return (
    <RowEventButton columns={`repeat(${actions.length}, 1fr)`}>
      {icons.length > 0 && icons}
    </RowEventButton>
  );
}
