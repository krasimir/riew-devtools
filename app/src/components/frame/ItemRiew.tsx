import React from 'react';
import { Box } from '../utils/icons';
import { ItemProps, Riew } from '../../types';
import useExpander from './hooks/useExpander';
import { Dim } from '../utils/ui';

function previewViewData(viewData: Riew['viewData']): string {
  if (viewData) {
    return Object.keys(viewData)
      .map(propName => {
        if (
          typeof viewData[propName] === 'boolean' ||
          typeof viewData[propName] === 'number'
        ) {
          return `${propName}=${String(viewData[propName])}`;
        }
        if (typeof viewData[propName] === 'string') {
          return `${propName}="${viewData[propName]}"`;
        }
        if (
          typeof viewData[propName] === 'object' &&
          typeof viewData[propName] !== null
        ) {
          return `${propName}=...`;
        }
        if (viewData[propName] === null) {
          return `${propName}=null`;
        }
        if (viewData[propName] === undefined) {
          return `${propName}=undefined`;
        }
        return propName;
      })
      .join(' ');
  }
  return '';
}

export default function ItemRiew({ data }: ItemProps) {
  const [expanded] = useExpander(data.id);
  const previewViewDataStr = previewViewData((data as Riew).viewData);
  return (
    <>
      <Box /> &lt;{data.name}{' '}
      {previewViewDataStr !== '' ? <Dim small>{previewViewDataStr}</Dim> : ''}
      &gt; {data.children && data.children.length && !expanded ? '…' : ''}
    </>
  );
}
