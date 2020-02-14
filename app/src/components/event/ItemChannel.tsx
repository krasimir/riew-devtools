import React from 'react';
import { Channel as ChannelIcon } from '../icons';
import { ItemProps } from '../../types';

export default function ItemChannel({ data }: ItemProps) {
  return (
    <>
      <ChannelIcon /> {data.name}#{data.id}
    </>
  );
}
