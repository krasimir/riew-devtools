import React from 'react';
import { GitCommit } from '../utils/icons';
import { ItemProps } from '../../types';
import Truncate from '../Truncate';

export default function ItemChannel({ data }: ItemProps) {
  return (
    <>
      <GitCommit /> <Truncate>{data.name}</Truncate>#{data.id}
    </>
  );
}
