import React from 'react';
import { SnapshotAction, What, State } from '../../types';

export default function StateTooltip({ data }: { data: SnapshotAction }) {
  if (data.what === What.STATE_VALUE_SET) {
    return (
      <>
        <strong>New value</strong>
        <pre>{JSON.stringify(data.meta, null, 2)}</pre>
      </>
    );
  }
  if (data.what === What.STATE_DESTROYED) {
    return <strong>Destroy</strong>;
  }
  if (data.what === What.STATE_CREATED) {
    return (
      <>
        <strong>Create</strong>
        <pre>{JSON.stringify((data.who as State).value, null, 2)}</pre>
      </>
    );
  }
  return <span>{data.what}</span>;
}
