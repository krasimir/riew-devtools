import React from 'react';
import { SnapshotAction } from '../../types';

export default function UnknownTooltip({ data }: { data: SnapshotAction }) {
  return <span>{data.what}</span>;
}
