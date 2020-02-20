import React from 'react';
import { RowEventButton } from '../utils/ui';
import {
  CirclePlus,
  ArrowUpCircle,
  ArrowRightCircle,
  XCircle,
  Circle,
} from '../utils/icons';
import { EventButtonProps, What } from '../../types';

export default function ChannelEventButton({
  data,
  actions,
}: EventButtonProps) {
  const icons = actions.map(({ what, meta }, idx) => {
    const style = { left: `${6 + idx * 10}px`, color: 'black' };
    switch (what) {
      case What.CHANNEL_PUT_INITIATED:
        return (
          <ArrowRightCircle key={idx} style={{ ...style, fill: '#242424' }} />
        );
      case What.CHANNEL_PUT_RESOLVED:
        return <ArrowRightCircle key={idx} style={style} />;
      case What.CHANNEL_TAKE_INITIATED:
        return (
          <ArrowUpCircle key={idx} style={{ ...style, fill: '#242424' }} />
        );
      case What.CHANNEL_TAKE_RESOLVED:
        return <ArrowUpCircle key={idx} style={style} />;
      case What.CHANNEL_CREATED:
        return <CirclePlus key={idx} style={style} />;
      case What.CHANNEL_CLOSED:
        return <XCircle key={idx} style={style} />;
      case What.CHANNEL_RESET:
        return <Circle key={idx} style={style} />;
      default:
        return null;
    }
  });

  return (
    <RowEventButton color="#1e6a2d" data-id={data.rawId}>
      {icons.length > 0 && icons}
    </RowEventButton>
  );
}
