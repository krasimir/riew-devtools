import React from 'react';
import { Empty } from '../utils/ui';
import { CIcon } from '../utils/icons';
import { EntityFrameProps, What } from '../../types';
import EventButtonIcon from '../utils/EventButtonIcon';

const COLOR = '#d4c15b';

export default function RoutineFrame({
  data,
  actions,
  created,
}: EntityFrameProps) {
  const icons = actions
    .map((action, idx) => {
      const { what, who } = action;

      if (who.rawId !== data.rawId)
        return (
          <Empty created={created && created[idx]} color={COLOR} key={idx} />
        );
      switch (what) {
        case What.ROUTINE_STOPPED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="play-stop-r" />
            </EventButtonIcon>
          );
        case What.ROUTINE_RERUN:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="undo" />
            </EventButtonIcon>
          );
        case What.ROUTINE_END:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="close" />
            </EventButtonIcon>
          );
        case What.ROUTINE_ASYNC_BEGIN:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="play-pause-o" />
            </EventButtonIcon>
          );
        case What.ROUTINE_ASYNC_END:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="arrow-right-o" />
            </EventButtonIcon>
          );
        case What.ROUTINE_ASYNC_ERROR:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="danger" />
            </EventButtonIcon>
          );
        case What.ROUTINE_STARTED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="add" />
            </EventButtonIcon>
          );
        default:
          return (
            <Empty created={created && created[idx]} color={COLOR} key={idx} />
          );
      }
    })
    .filter(i => i);

  return <>{icons}</>;
}
