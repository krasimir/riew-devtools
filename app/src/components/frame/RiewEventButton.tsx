import React from 'react';
import { RowEventButton, EventColumnIdx } from '../utils/ui';
import {
  Download,
  Upload,
  Image,
  ArrowRightCircle,
  CirclePlus,
} from '../utils/icons';
import { EventButtonProps, What } from '../../types';
import EventButtonIcon from '../utils/EventButtonIcon';

export default function RiewEventButton({
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
        case What.RIEW_RENDERED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Image style={style} />
            </EventButtonIcon>
          );
        case What.RIEW_MOUNTED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Download style={style} />
            </EventButtonIcon>
          );
        case What.RIEW_UNMOUNTED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Upload style={style} />
            </EventButtonIcon>
          );
        case What.RIEW_UPDATED:
          return (
            <EventButtonIcon action={action} key={idx}>
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <ArrowRightCircle style={style} />
            </EventButtonIcon>
          );
        case What.RIEW_CREATED:
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
      color="#2a8778"
      data-id={data.rawId}
      columns={`repeat(${columns || icons.length}, 1fr)`}
    >
      {icons.length > 0 && icons}
    </RowEventButton>
  );
}
