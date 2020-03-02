import React from 'react';
import { Database, MoreHorizontal } from '../utils/icons';
import { ItemProps } from '../../types';
import useExpander from '../hooks/useExpander';
import Truncate from '../Truncate';

export default function ItemState({ data, expandable }: ItemProps) {
  const [expanded] = useExpander(data.id);
  return (
    <>
      <Database /> <Truncate>{data.name}</Truncate>{' '}
      {expandable && data.children && data.children.length && !expanded ? (
        <MoreHorizontal />
      ) : (
        ''
      )}
    </>
  );
}

ItemState.defaultProps = {
  expandable: true,
};
