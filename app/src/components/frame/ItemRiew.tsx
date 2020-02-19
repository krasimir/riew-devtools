import React from 'react';
import { Box } from '../utils/icons';
import { Truncate } from '../utils/ui';
import { ItemProps } from '../../types';
import useExpander from '../hooks/useExpander';

export default function ItemRiew({ data }: ItemProps) {
  const [expanded] = useExpander(data.id);
  return (
    <>
      <Box /> &lt;<Truncate>{data.name}</Truncate>&gt;
      {data.children && data.children.length && !expanded ? '…' : ''}
    </>
  );
}
