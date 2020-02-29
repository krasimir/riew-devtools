import React from 'react';
import { SnapshotAction, What } from '../../types';

export default function RoutineTooltip({ data }: { data: SnapshotAction }) {
  if (data.what === What.ROUTINE_STOPPED) {
    return <strong>{data.who.name}: Stop</strong>;
  }
  if (data.what === What.ROUTINE_RERUN) {
    return <strong>{data.who.name}: Re-run</strong>;
  }
  if (data.what === What.ROUTINE_END) {
    return <strong>{data.who.name}: End</strong>;
  }
  if (data.what === What.ROUTINE_ASYNC_BEGIN) {
    return <strong>{data.who.name}: Async start</strong>;
  }
  if (data.what === What.ROUTINE_ASYNC_END) {
    return <strong>{data.who.name}: Async ends</strong>;
  }
  if (data.what === What.ROUTINE_STARTED) {
    return <strong>{data.who.name}: Start</strong>;
  }
  if (data.what === What.ROUTINE_ASYNC_ERROR) {
    return (
      <>
        <strong>{data.who.name}: Error</strong>
        <pre>{JSON.stringify(data.meta, null, 2)}</pre>
      </>
    );
  }
  return <span>{data.what}</span>;
}
