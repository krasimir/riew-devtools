import React from 'react';
import { SnapshotAction, What, Channel } from '../../types';

function normalizeChannelValue(value: any[] | any): string {
  if (Array.isArray(value) && value.length === 1) {
    return JSON.stringify(value[0], null, 2);
  }
  return JSON.stringify(value, null, 2);
}

export default function ChannelTooltip({ data }: { data: SnapshotAction }) {
  if (data.what === What.CHANNEL_PUT_INITIATED) {
    return (
      <>
        <strong>PUT initiated</strong>
        <pre>{JSON.stringify(data.meta, null, 2)}</pre>
      </>
    );
  }
  if (data.what === What.CHANNEL_PUT_RESOLVED) {
    return (
      <>
        <strong>PUT successful</strong>
        <pre>{normalizeChannelValue((data.who as Channel).value)}</pre>
      </>
    );
  }
  if (data.what === What.CHANNEL_TAKE_INITIATED) {
    return <strong>Take initiated</strong>;
  }
  if (data.what === What.CHANNEL_TAKE_RESOLVED) {
    return (
      <>
        <strong>Take successful</strong>
        <pre>{JSON.stringify(data.meta, null, 2)}</pre>
      </>
    );
  }
  if (data.what === What.CHANNEL_CREATED) {
    return <strong>Create</strong>;
  }
  if (data.what === What.CHANNEL_CLOSED) {
    return (
      <>
        <strong>Close</strong>
        <pre>{normalizeChannelValue((data.who as Channel).value)}</pre>
      </>
    );
  }
  if (data.what === What.CHANNEL_RESET) {
    return (
      <>
        <strong>Reset</strong>
        <pre>{normalizeChannelValue((data.who as Channel).value)}</pre>
      </>
    );
  }
  return <span>{data.what}</span>;
}
