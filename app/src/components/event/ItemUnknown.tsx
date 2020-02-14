import React from 'react';
import { ItemProps } from '../../types';

export default function ItemUnknown({ data }: ItemProps) {
  return <>{data.rawId}</>;
}
