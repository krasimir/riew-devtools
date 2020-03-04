import React from 'react';
import { ItemProps } from '../../types';
import Truncate from '../Truncate';

export default function ItemChannel({ data }: ItemProps) {
  return (
    <>
      <Truncate>{data.name}</Truncate>#{data.id}
    </>
  );
}
