import React from 'react';
import { RowEventButton, EventColumnIdx } from '../utils/ui';
import { EventButtonProps, What } from '../../types';
import EventButtonIcon from '../utils/EventButtonIcon';

export default function RoutineEventButton({
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
                ? './img/app_routine_0.jpg'
                : './img/app_empty.jpg'
            }
          />
        );
      switch (what) {
        case What.ROUTINE_STOPPED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_routine_stopped.jpg" />
            </EventButtonIcon>
          );
        case What.ROUTINE_RERUN:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_routine_rerun.jpg" />
            </EventButtonIcon>
          );
        case What.ROUTINE_END:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_routine_end.jpg" />
            </EventButtonIcon>
          );
        case What.ROUTINE_ASYNC_BEGIN:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_routine_async_begin.jpg" />
            </EventButtonIcon>
          );
        case What.ROUTINE_ASYNC_END:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_routine_async_end.jpg" />
            </EventButtonIcon>
          );
        case What.ROUTINE_ASYNC_ERROR:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_routine_error.jpg" />
            </EventButtonIcon>
          );
        case What.ROUTINE_STARTED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <img src="./img/app_routine_started.jpg" />
            </EventButtonIcon>
          );
        default:
          return (
            <img
              key={idx}
              src={
                created && created[idx]
                  ? './img/app_routine_0.jpg'
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
