import React from 'react';
import { RowEventButton, EventColumnIdx } from '../utils/ui';
import { EventButtonProps, What } from '../../types';
import EventButtonIcon from '../utils/EventButtonIcon';

export default function StateEventButton({ data, actions }: EventButtonProps) {
  let created = false;
  const icons = actions
    .map((action, idx) => {
      const { what, who } = action;

      if (who.rawId !== data.rawId)
        return (
          <img
            key={idx}
            src={created ? './img/app_state_0.jpg' : './img/app_empty.jpg'}
          />
        );
      switch (what) {
        case What.STATE_VALUE_SET:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_state_value_set.jpg" />
            </EventButtonIcon>
          );
        case What.STATE_DESTROYED:
          created = false;
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_state_destroyed.jpg" />
            </EventButtonIcon>
          );
        case What.STATE_CREATED:
          created = true;
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_state_created.jpg" />
            </EventButtonIcon>
          );
        default:
          return (
            <img
              key={idx}
              src={created ? './img/app_state_0.jpg' : './img/app_empty.jpg'}
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
