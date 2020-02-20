import React from 'react';
import { RowEventButton } from '../utils/ui';
import {
  PlayCircle,
  StopCircle,
  Circle,
  CirclePlus,
  XCircle,
  AlertCircle,
  CheckCircle,
} from '../utils/icons';
import { EventButtonProps, What } from '../../types';

export default function RoutineEventButton({
  data,
  actions,
}: EventButtonProps) {
  const icons = actions.map(({ what, meta }, idx) => {
    const style = { left: `${6 + idx * 10}px`, color: 'black' };
    switch (what) {
      case What.ROUTINE_STOPPED:
        return <StopCircle key={idx} style={style} />;
      case What.ROUTINE_RERUN:
        return <Circle key={idx} style={style} />;
      case What.ROUTINE_END:
        return <XCircle key={idx} style={style} />;
      case What.ROUTINE_ASYNC_BEGIN:
        return <PlayCircle key={idx} style={style} />;
      case What.ROUTINE_ASYNC_END:
        return <CheckCircle key={idx} style={style} />;
      case What.ROUTINE_ASYNC_ERROR:
        return <AlertCircle key={idx} style={style} />;
      case What.ROUTINE_STARTED:
        return <CirclePlus key={idx} style={style} />;
      default:
        return null;
    }
  });

  return (
    <RowEventButton color="#704040" data-id={data.rawId}>
      {icons.length > 0 && icons}
    </RowEventButton>
  );
}
