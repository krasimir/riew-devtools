import React from 'react';
import JSONTree from 'react-json-tree';

import { Box } from '../utils/icons';
import { ItemProps, Riew } from '../../types';

export default function ItemDetails({ data }: ItemProps) {
  return (
    <>
      <Box /> &lt;{data.name}&gt;
      <JSONTree data={(data as Riew).viewData as {}} />
    </>
  );
}
