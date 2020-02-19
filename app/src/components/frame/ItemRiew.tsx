import React from 'react';
import { Box } from '../utils/icons';
import { ItemProps } from '../../types';
import useExpander from '../hooks/useExpander';
import Truncate from '../Truncate';

export default function ItemRiew({ data }: ItemProps) {
  const [expanded] = useExpander(data.id);
  return (
    <>
      <Box /> &lt;<Truncate>{data.name}</Truncate>&gt;
      {data.children && data.children.length && !expanded
        ? `(${data.children.length})`
        : ''}
    </>
  );
}
