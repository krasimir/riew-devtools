import React from 'react';
import { CPU } from '../icons';
import { ItemProps } from '../../types';

export default function ItemRoutine({ data }: ItemProps) {
  return (
    <>
      <CPU /> {data.name}
    </>
  );
}
