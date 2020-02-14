import React from 'react';
import { CPU } from '../icons';
import { ItemProps } from '../../types';
import useExpander from '../hooks/useExpander';

export default function ItemRoutine({ data }: ItemProps) {
  const [expanded] = useExpander(data.id);
  return (
    <>
      <CPU /> {data.name}{' '}
      {data.children && data.children.length && !expanded ? '…' : ''}
    </>
  );
}
