import React from 'react';
import { SnapshotAction, What, Channel } from '../../types';
import Truncate from '../Truncate';

function normalizeChannelValue(value: any[] | any): string {
  if (Array.isArray(value) && value.length === 1) {
    return JSON.stringify(value[0], null, 2);
  }
  return JSON.stringify(value, null, 2);
}

export default function ChannelTooltip({ data }: { data: SnapshotAction }) {
  const channel: Channel = data.who as Channel;

  if (data.what === What.CHANNEL_PUT_INITIATED) {
    return (
      <>
        <strong>
          <Truncate>{channel.name}</Truncate>#{channel.id}: PUT initiated
        </strong>
        <pre>{JSON.stringify(data.meta, null, 2)}</pre>
      </>
    );
  }
  if (data.what === What.CHANNEL_PUT_RESOLVED) {
    return (
      <>
        <strong>
          <Truncate>{channel.name}</Truncate>#{channel.id}: PUT successful
        </strong>
        <pre>{normalizeChannelValue((data.who as Channel).value)}</pre>
      </>
    );
  }
  if (data.what === What.CHANNEL_TAKE_INITIATED) {
    return (
      <strong>
        <Truncate>{channel.name}</Truncate>#{channel.id}: Take initiated
      </strong>
    );
  }
  if (data.what === What.CHANNEL_TAKE_RESOLVED) {
    return (
      <>
        <strong>
          <Truncate>{channel.name}</Truncate>#{channel.id}: Take successful
        </strong>
        <pre>{JSON.stringify(data.meta, null, 2)}</pre>
      </>
    );
  }
  if (data.what === What.CHANNEL_CREATED) {
    return (
      <strong>
        <Truncate>{channel.name}</Truncate>#{channel.id}: Create
      </strong>
    );
  }
  if (data.what === What.CHANNEL_CLOSED) {
    return (
      <>
        <strong>
          <Truncate>{channel.name}</Truncate>#{channel.id}: Close
        </strong>
        <pre>{normalizeChannelValue((data.who as Channel).value)}</pre>
      </>
    );
  }
  if (data.what === What.CHANNEL_RESET) {
    return (
      <>
        <strong>
          <Truncate>{channel.name}</Truncate>#{channel.id}: Reset
        </strong>
        <pre>{normalizeChannelValue((data.who as Channel).value)}</pre>
      </>
    );
  }
  return <span>{data.what}</span>;
}
