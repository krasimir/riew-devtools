import React, { useState, useEffect } from 'react';

import { Container, DetailsWrapper, CloseLink } from '../utils/ui';
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

let detailsItems: Entity[] = [];
let subscribers: Function[] = [];
const listen = (callback: Function): Function => {
  subscribers.push(callback);
  return () => {
    subscribers = subscribers.filter(fn => fn !== callback);
  };
};

interface DetailsProps {
  state: Entity[];
}

function doesItemExist(item: Entity, entities: Entity[]): boolean {
  for (let i = 0; i < entities.length; i++) {
    if (item.id === entities[i].id) {
      return true;
    }
    if (entities[i].children) {
      const found = doesItemExist(item, entities[i].children as Entity[]);
      if (found) {
        return true;
      }
    }
  }
  return false;
}

export default function Details({ state }: DetailsProps) {
  const [items, setItems] = useState<Entity[]>(detailsItems);

  useEffect(() => {
    const unsubscribe = listen((newItems: Entity[]) => {
      setItems([...newItems]);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Container m={0} p={0}>
      {items
        .filter(item => doesItemExist(item, state))
        .map(item => {
          const Component = getComponent(item.type);

          return (
            <DetailsWrapper key={item.rawId}>
              <CloseLink onClick={() => Details.hide(item)}>✖</CloseLink>
              <Component data={item} />
            </DetailsWrapper>
          );
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
Details.hide = (data: Entity) => {
  detailsItems = detailsItems.filter(({ rawId }) => rawId !== data.rawId);
  subscribers.forEach(fn => fn(detailsItems));
};
