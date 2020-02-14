import React from 'react';
import { Database } from '../icons';
import { ItemProps } from '../../types';

export default function ItemState({ data }: ItemProps) {
  return (
    <>
      <Database /> {data.name}
    </>
  );
}
