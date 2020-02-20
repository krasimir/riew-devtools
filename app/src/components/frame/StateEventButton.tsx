import React from 'react';
import { RowEventButton } from '../utils/ui';
import { XCircle, ArrowRightCircle, CirclePlus } from '../utils/icons';
import { EventButtonProps, What } from '../../types';

export default function StateEventButton({ data, actions }: EventButtonProps) {
  const icons = actions.map(({ what, meta }, idx) => {
    const style = { left: `${6 + idx * 10}px`, color: 'black' };
    switch (what) {
      case What.STATE_VALUE_SET:
        return <ArrowRightCircle key={idx} style={style} />;
      case What.STATE_DESTROYED:
        return <XCircle key={idx} style={style} />;
      case What.STATE_CREATED:
        return <CirclePlus key={idx} style={style} />;
      default:
        return null;
    }
  });

  return (
    <RowEventButton color="#634834" data-id={data.rawId}>
      {icons.length > 0 && icons}
    </RowEventButton>
  );
}
