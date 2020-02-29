import React from 'react';
import { SnapshotAction, What } from '../../types';

export default function RoutineTooltip({ data }: { data: SnapshotAction }) {
  if (data.what === What.ROUTINE_STOPPED) {
    return <strong>Stop</strong>;
  }
  if (data.what === What.ROUTINE_RERUN) {
    return <strong>Re-run</strong>;
  }
  if (data.what === What.ROUTINE_END) {
    return <strong>End</strong>;
  }
  if (data.what === What.ROUTINE_ASYNC_BEGIN) {
    return <strong>Async operation start</strong>;
  }
  if (data.what === What.ROUTINE_ASYNC_END) {
    return <strong>Async operation ends</strong>;
  }
  if (data.what === What.ROUTINE_STARTED) {
    return <strong>Start</strong>;
  }
  if (data.what === What.ROUTINE_ASYNC_ERROR) {
    return (
      <>
        <strong>Error</strong>
        <pre>{JSON.stringify(data.meta, null, 2)}</pre>
      </>
    );
  }
  return <span>{data.what}</span>;
}
