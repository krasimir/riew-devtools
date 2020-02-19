import React from 'react';
import { Database } from '../utils/icons';
import { ItemProps } from '../../types';
import useExpander from '../hooks/useExpander';
import Truncate from '../Truncate';

export default function ItemState({ data }: ItemProps) {
  const [expanded] = useExpander(data.id);
  return (
    <>
      <Database /> <Truncate>{data.name}</Truncate>{' '}
      {data.children && data.children.length && !expanded
        ? `(${data.children.length})`
        : ''}
    </>
  );
}
