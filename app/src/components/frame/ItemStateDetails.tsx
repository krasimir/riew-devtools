import React from 'react';
import { Database } from '../utils/icons';
import { ItemProps } from '../../types';
import useExpander from '../hooks/useExpander';

export default function ItemDetails({ data }: ItemProps) {
  const [expanded] = useExpander(data.id);
  return (
    <>
      <Database /> {data.name}{' '}
      {data.children && data.children.length && !expanded ? '…' : ''}
    </>
  );
}
