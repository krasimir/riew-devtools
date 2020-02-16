import React, { useState, useEffect } from 'react';

import { Container } from '../utils/ui';
import { Entity, ItemType, ItemProps } from '../../types';
import ItemChannelDetails from './ItemChannelDetails';
import ItemRiewDetails from './ItemRiewDetails';
import ItemStateDetails from './ItemStateDetails';
import ItemRoutineDetails from './ItemRoutineDetails';
import ItemUnknownDetails from './ItemUnknownDetails';

const getComponent = (type: ItemType): React.FC<ItemProps> =>
  ({
    [ItemType.RIEW]: ItemRiewDetails,
    [ItemType.CHANNEL]: ItemChannelDetails,
    [ItemType.STATE]: ItemStateDetails,
    [ItemType.ROUTINE]: ItemRoutineDetails,
    [ItemType.UNRECOGNIZED]: ItemUnknownDetails,
  }[type] || ItemUnknownDetails);

const detailsItems: Entity[] = [];
let subscribers: Function[] = [];
const listen = (callback: Function): Function => {
  subscribers.push(callback);
  return () => {
    subscribers = subscribers.filter(fn => fn !== callback);
  };
};

export default function Details() {
  const [items, setItems] = useState<Entity[]>(detailsItems);

  useEffect(() => {
    const unsubscribe = listen((newItems: Entity[]) => {
      setItems([...newItems]);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Container m={0} p={0}>
      {items.map(item => {
        const Component = getComponent(item.type);

        return <Component data={item} key={item.rawId} />;
      })}
    </Container>
  );
}

Details.show = (data: Entity) => {
  if (!detailsItems.find(({ id }) => data.id === id)) {
    detailsItems.push(data);
    subscribers.forEach(fn => fn(detailsItems));
  }
};
