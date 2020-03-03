import React from 'react';
import { RowEventButton, Empty } from '../utils/ui';
import { CIcon } from '../utils/icons';
import { EventButtonProps, What } from '../../types';
import EventButtonIcon from '../utils/EventButtonIcon';

const COLOR = '#d4c15b';

export default function RoutineEventButton({
  data,
  actions,
  created,
}: EventButtonProps) {
  const icons = actions
    .map((action, idx) => {
      const { what, who } = action;

      if (who.rawId !== data.rawId)
        return <Empty created={created && created[idx]} color={COLOR} />;
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
