import React from 'react';
import { ItemProps } from '../../types';
import useExpander from '../hooks/useExpander';

export default function ItemRoutine({ data }: ItemProps) {
  const [expanded] = useExpander(data.id);
  return (
    <>
      {data.name}{' '}
      {data.children && data.children.length && !expanded ? '…' : ''}
    </>
  );
}
