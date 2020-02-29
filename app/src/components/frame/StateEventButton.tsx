import React from 'react';
import { RowEventButton, EventColumnIdx } from '../utils/ui';
import { XCircle, Download, CirclePlus } from '../utils/icons';
import { EventButtonProps, What } from '../../types';
import EventButtonIcon from '../utils/EventButtonIcon';

export default function StateEventButton({ data, actions }: EventButtonProps) {
  const icons = actions
    .map((action, idx) => {
      const { what, who } = action;

      if (who.rawId !== data.rawId) return null;
      const style = { color: 'black' };
      switch (what) {
        case What.STATE_VALUE_SET:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Download style={style} />
            </EventButtonIcon>
          );
        case What.STATE_DESTROYED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <XCircle style={style} />
            </EventButtonIcon>
          );
        case What.STATE_CREATED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <CirclePlus style={style} />
            </EventButtonIcon>
          );
        default:
          return null;
      }
    })
    .filter(i => i);

  return (
    <RowEventButton
      color="#6d8039"
      data-id={data.rawId}
      columns={`repeat(${icons.length}, 1fr)`}
    >
      {icons.length > 0 && icons}
    </RowEventButton>
  );
}
