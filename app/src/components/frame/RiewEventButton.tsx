import React from 'react';
import { RowEventButton } from '../utils/ui';
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Chrome,
  ArrowRightCircle,
  CirclePlus,
} from '../utils/icons';
import { EventButtonProps, What } from '../../types';

export default function RiewEventButton({ data, actions }: EventButtonProps) {
  const icons = actions.map(({ what, meta }, idx) => {
    const style = { left: `${6 + idx * 10}px`, color: 'black' };
    switch (what) {
      case What.RIEW_RENDERED:
        return <Chrome key={idx} style={style} />;
      case What.RIEW_MOUNTED:
        return <ArrowDownCircle key={idx} style={style} />;
      case What.RIEW_UNMOUNTED:
        return <ArrowUpCircle key={idx} style={style} />;
      case What.RIEW_UPDATED:
        return <ArrowRightCircle key={idx} style={style} />;
      case What.RIEW_CREATED:
        return <CirclePlus key={idx} style={style} />;
      default:
        return null;
    }
  });

  return (
    <RowEventButton color="#2a8778" data-id={data.rawId}>
      {icons.length > 0 && icons}
    </RowEventButton>
  );
}
