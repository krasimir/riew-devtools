import React from 'react';
import { Box } from '../icons';
import { ItemProps } from '../../types';

export default function ItemRiew({ data }: ItemProps) {
  return (
    <>
      <Box /> &lt;{data.name}&gt;{' '}
      {data.children && data.children.length > 0 ? '...' : ''}
    </>
  );
}
