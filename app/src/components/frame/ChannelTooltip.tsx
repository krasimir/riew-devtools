import React from 'react';
import { SnapshotAction, What } from '../../types';

export default function ChannelTooltip({ data }: { data: SnapshotAction }) {
  if (data.what === What.CHANNEL_PUT_INITIATED) {
    return (
      <>
        <strong>PUT initiated</strong>
        <br />
        {data.meta && <pre>{JSON.stringify(data.meta, null, 2)}</pre>}
      </>
    );
  }
  return <span>{data.what}</span>;
}
