import React from 'react';
import { GitCommit } from '../utils/icons';
import { ItemProps } from '../../types';

export default function ItemDetails({ data }: ItemProps) {
  return (
    <>
      <GitCommit /> {data.name}#{data.id}
    </>
  );
}
