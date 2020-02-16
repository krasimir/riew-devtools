import React from 'react';
import { ItemProps } from '../../types';

export default function ItemDetails({ data }: ItemProps) {
  return <>{data.rawId}</>;
}
