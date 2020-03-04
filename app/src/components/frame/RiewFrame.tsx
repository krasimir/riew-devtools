import React from 'react';
import { Empty } from '../utils/ui';
import { CIcon } from '../utils/icons';
import { EntityFrameProps, What } from '../../types';
import EventButtonIcon from '../utils/EventButtonIcon';

const COLOR = '#f0628a';

export default function RiewFrame({
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
        case What.RIEW_RENDERED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="image" />
            </EventButtonIcon>
          );
        case What.RIEW_MOUNTED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="push-chevron-down-o" />
            </EventButtonIcon>
          );
        case What.RIEW_UNMOUNTED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="push-chevron-up-o" />
            </EventButtonIcon>
          );
        case What.RIEW_UPDATED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="check-o" />
            </EventButtonIcon>
          );
        case What.RIEW_CREATED:
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
