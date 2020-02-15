import React, { useState, useEffect } from 'react';

import { Container } from '../utils/ui';
import { Entity } from '../../types';

const detailsItems: Entity[] = [];
const onChangeCallbacks = [];

export default function Details() {
  const [items, setItems] = useState<Entity[]>(detailsItems);

  useEffect(() => {
    onChangeCallbacks.push(setItems);
  }, []);

  return (
    <Container m={0} p={0}>
      {items.length}
    </Container>
  );
}

Details.show = (data: Entity) => {
  detailsItems.push(data);
};
