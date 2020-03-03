import React from 'react';
import { RowEventButton, Empty } from '../utils/ui';
import { CIcon } from '../utils/icons';
import { EventButtonProps, What } from '../../types';
import EventButtonIcon from '../utils/EventButtonIcon';

const COLOR = '#abd21f';

export default function StateEventButton({
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
