import React from 'react';
import { SnapshotAction, What } from '../../types';
import Truncate from '../Truncate';

export default function RiewTooltip({ data }: { data: SnapshotAction }) {
  if (data.what === What.RIEW_RENDERED) {
    return (
      <>
        <strong>
          &lt;<Truncate>{data.who.name}</Truncate>&gt;: Render
        </strong>
        <pre>{JSON.stringify(data.meta, null, 2)}</pre>
      </>
    );
  }
  if (data.what === What.RIEW_MOUNTED) {
    return (
      <strong>
        &lt;<Truncate>{data.who.name}</Truncate>&gt;: Mount
      </strong>
    );
  }
  if (data.what === What.RIEW_UNMOUNTED) {
    return (
      <strong>
        &lt;<Truncate>{data.who.name}</Truncate>&gt;: Unmount
      </strong>
    );
  }
  if (data.what === What.RIEW_UPDATED) {
    return (
      <>
        <strong>
          &lt;<Truncate>{data.who.name}</Truncate>&gt;: Update
        </strong>
        <pre>{JSON.stringify(data.meta, null, 2)}</pre>
      </>
    );
  }
  if (data.what === What.RIEW_CREATED) {
    return (
      <strong>
        &lt;<Truncate>{data.who.name}</Truncate>&gt;: Create
      </strong>
    );
  }
  return <span>{data.what}</span>;
}
