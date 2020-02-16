import React from 'react';
import { Box } from '../utils/icons';
import { ItemProps } from '../../types';
import useExpander from '../hooks/useExpander';

export default function ItemDetails({ data }: ItemProps) {
  const [expanded] = useExpander(data.id);
  return (
    <>
      <Box /> &lt;{data.name}&gt;
      {data.children && data.children.length && !expanded ? '…' : ''}
    </>
  );
}
