import React from 'react';
import { SnapshotAction } from '../../types';

export default function ChannelTooltip({ data }: { data: SnapshotAction }) {
  return <span>{data.what}</span>;
}
