import React from 'react';
import { ItemProps } from '../../types';
import useExpander from '../hooks/useExpander';
import Truncate from '../Truncate';

export default function ItemRiew({ data, expandable }: ItemProps) {
  const [expanded] = useExpander(data.id);
  return (
    <>
      &lt;<Truncate>{data.name}</Truncate>&gt;{' '}
      {expandable && data.children && data.children.length && !expanded
        ? '...'
        : ''}
    </>
  );
}

ItemRiew.defaultProps = {
  expandable: true,
};
