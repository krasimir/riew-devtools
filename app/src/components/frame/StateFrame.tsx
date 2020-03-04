import React from 'react';
import { Empty } from '../utils/ui';
import { CIcon } from '../utils/icons';
import { EntityFrameProps, What } from '../../types';
import EventButtonIcon from '../utils/EventButtonIcon';

const COLOR = '#abd21f';

export default function StateFrame({
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
        case What.STATE_VALUE_SET:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="push-down" />
            </EventButtonIcon>
          );
        case What.STATE_DESTROYED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <CIcon type="close" />
            </EventButtonIcon>
          );
        case What.STATE_CREATED:
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
