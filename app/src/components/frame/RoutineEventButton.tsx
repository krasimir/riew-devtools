import React from 'react';
import { RowEventButton, EventColumnIdx, Container } from '../utils/ui';
import {
  PlayCircle,
  StopCircle,
  Play,
  X,
  AlertCircle,
  Loading,
} from '../utils/icons';
import { EventButtonProps, What } from '../../types';
import Tooltip from '../Tooltip';

export default function RoutineEventButton({
  data,
  actions,
}: EventButtonProps) {
  const icons = actions
    .map((action, idx) => {
      const { what, meta, who } = action;

      if (who.rawId !== data.rawId) return null;
      const style = { color: 'black' };
      switch (what) {
        case What.ROUTINE_STOPPED:
          return (
            <Container
              key={idx}
              onMouseEnter={() => Tooltip.show(action)}
              onMouseLeave={() => Tooltip.hide()}
            >
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <StopCircle style={style} />
            </Container>
          );
        case What.ROUTINE_RERUN:
          return (
            <Container
              key={idx}
              onMouseEnter={() => Tooltip.show(action)}
              onMouseLeave={() => Tooltip.hide()}
            >
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <PlayCircle style={style} />
            </Container>
          );
        case What.ROUTINE_END:
          return (
            <Container
              key={idx}
              onMouseEnter={() => Tooltip.show(action)}
              onMouseLeave={() => Tooltip.hide()}
            >
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <X style={style} />
            </Container>
          );
        case What.ROUTINE_ASYNC_BEGIN:
          return (
            <Container
              key={idx}
              onMouseEnter={() => Tooltip.show(action)}
              onMouseLeave={() => Tooltip.hide()}
            >
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Loading style={style} />
            </Container>
          );
        case What.ROUTINE_ASYNC_END:
          return (
            <Container
              key={idx}
              onMouseEnter={() => Tooltip.show(action)}
              onMouseLeave={() => Tooltip.hide()}
            >
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Play style={style} />
            </Container>
          );
        case What.ROUTINE_ASYNC_ERROR:
          return (
            <Container
              key={idx}
              onMouseEnter={() => Tooltip.show(action)}
              onMouseLeave={() => Tooltip.hide()}
            >
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <AlertCircle style={style} />
            </Container>
          );
        case What.ROUTINE_STARTED:
          return (
            <Container
              key={idx}
              onMouseEnter={() => Tooltip.show(action)}
              onMouseLeave={() => Tooltip.hide()}
            >
              <EventColumnIdx>{idx + 1}</EventColumnIdx>
              <Play style={style} />
            </Container>
          );
        default:
          return null;
      }
    })
    .filter(i => i);

  return (
    <RowEventButton
      color="#704040"
      data-id={data.rawId}
      columns={`repeat(${icons.length}, 1fr)`}
    >
      {icons.length > 0 && icons}
    </RowEventButton>
  );
}
