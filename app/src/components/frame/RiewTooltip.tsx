import React from 'react';
import { SnapshotAction, What } from '../../types';

export default function RiewTooltip({ data }: { data: SnapshotAction }) {
  if (data.what === What.RIEW_RENDERED) {
    return (
      <>
        <strong>Render</strong>
        <pre>{JSON.stringify(data.meta, null, 2)}</pre>
      </>
    );
  }
  if (data.what === What.RIEW_MOUNTED) {
    return <strong>Mount</strong>;
  }
  if (data.what === What.RIEW_UNMOUNTED) {
    return <strong>Unmount</strong>;
  }
  if (data.what === What.RIEW_UPDATED) {
    return (
      <>
        <strong>Update</strong>
        <pre>{JSON.stringify(data.meta, null, 2)}</pre>
      </>
    );
  }
  if (data.what === What.RIEW_CREATED) {
    return <strong>Create</strong>;
  }
  return <span>{data.what}</span>;
}
