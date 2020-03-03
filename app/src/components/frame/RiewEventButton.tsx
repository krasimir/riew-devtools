import React from 'react';
import { RowEventButton, EventColumnIdx } from '../utils/ui';
import { EventButtonProps, What } from '../../types';
import EventButtonIcon from '../utils/EventButtonIcon';

export default function RiewEventButton({
  data,
  actions,
  created,
}: EventButtonProps) {
  const icons = actions
    .map((action, idx) => {
      const { what, who } = action;

      if (who.rawId !== data.rawId)
        return (
          <img
            key={idx}
            src={
              created && created[idx]
                ? './img/app_riew_0.jpg'
                : './img/app_empty.jpg'
            }
          />
        );
      switch (what) {
        case What.RIEW_RENDERED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_riew_rendered.jpg" />
            </EventButtonIcon>
          );
        case What.RIEW_MOUNTED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_riew_mounted.jpg" />
            </EventButtonIcon>
          );
        case What.RIEW_UNMOUNTED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_riew_unmounted.jpg" />
            </EventButtonIcon>
          );
        case What.RIEW_UPDATED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_riew_updated.jpg" />
            </EventButtonIcon>
          );
        case What.RIEW_CREATED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_riew_created.jpg" />
            </EventButtonIcon>
          );
        default:
          return (
            <img
              key={idx}
              src={
                created && created[idx]
                  ? './img/app_riew_0.jpg'
                  : './img/app_empty.jpg'
              }
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
