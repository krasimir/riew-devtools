import React from 'react';
import { RowEventButton, EventColumnIdx } from '../utils/ui';
import {
  PlayCircle,
  StopCircle,
  Play,
  X,
  AlertCircle,
  Loading,
} from '../utils/icons';
import { EventButtonProps, What } from '../../types';
import EventButtonIcon from '../utils/EventButtonIcon';

export default function RoutineEventButton({
  data,
  actions,
  columns,
}: EventButtonProps) {
  const icons = actions
    .map((action, idx) => {
      const { what, who } = action;

      if (who.rawId !== data.rawId) return null;
      const style = { color: 'black' };
      switch (what) {
        case What.ROUTINE_STOPPED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <StopCircle style={style} />
            </EventButtonIcon>
          );
        case What.ROUTINE_RERUN:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <PlayCircle style={style} />
            </EventButtonIcon>
          );
        case What.ROUTINE_END:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <X style={style} />
            </EventButtonIcon>
          );
        case What.ROUTINE_ASYNC_BEGIN:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Loading style={style} />
            </EventButtonIcon>
          );
        case What.ROUTINE_ASYNC_END:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Play style={style} />
            </EventButtonIcon>
          );
        case What.ROUTINE_ASYNC_ERROR:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <AlertCircle style={style} />
            </EventButtonIcon>
          );
        case What.ROUTINE_STARTED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Play style={style} />
            </EventButtonIcon>
          );
        default:
          return null;
      }
    })
    .filter(i => i);

  return (
    <RowEventButton
      color="#704040"
      data-id={data.rawId}
      columns={`repeat(${columns || icons.length}, 1fr)`}
    >
      {icons.length > 0 && icons}
    </RowEventButton>
  );
}
