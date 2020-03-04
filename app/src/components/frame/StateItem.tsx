import React from 'react';
import { ItemProps } from '../../types';
import useExpander from '../hooks/useExpander';
import Truncate from '../Truncate';

export default function ItemState({ data, expandable }: ItemProps) {
  const [expanded] = useExpander(data.id);
  return (
    <>
      <Truncate>{data.name}</Truncate>{' '}
      {expandable && data.children && data.children.length && !expanded
        ? '...'
        : ''}
    </>
  );
}

ItemState.defaultProps = {
  expandable: true,
};
