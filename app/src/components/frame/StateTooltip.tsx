import React from 'react';
import { SnapshotAction, What } from '../../types';
import Truncate from '../Truncate';

export default function StateTooltip({ data }: { data: SnapshotAction }) {
  if (data.what === What.STATE_VALUE_SET) {
    return (
      <>
        <strong>
          <Truncate>{data.who.name}</Truncate>: New value
        </strong>
        <pre>{JSON.stringify(data.meta, null, 2)}</pre>
      </>
    );
  }
  if (data.what === What.STATE_DESTROYED) {
    return (
      <strong>
        <Truncate>{data.who.name}</Truncate>: Destroy
      </strong>
    );
  }
  if (data.what === What.STATE_CREATED) {
    return (
      <strong>
        <Truncate>{data.who.name}</Truncate>: Create
      </strong>
    );
  }
  return <span>{data.what}</span>;
}
