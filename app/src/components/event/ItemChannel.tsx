import React from 'react';
import { Minus } from '../icons';
import { ItemProps } from '../../types';

export default function ItemChannel({ data }: ItemProps) {
  return (
    <>
      <Minus /> {data.name}#{data.id}
    </>
  );
}
