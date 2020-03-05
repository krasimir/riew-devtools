/* eslint-disable no-nested-ternary, prefer-destructuring */
import { ChannelBuffers, ItemType, Entity } from '../types';

export default function normalizeEntity({
  id,
  type,
  ...restProps
}: {
  id: string;
  type: ItemType;
}): Entity {
  let entity: Entity;

  if (type === ItemType.RIEW) {
    entity = {
      id,
      type,
      ...restProps,
    };
  } else if (type === ItemType.CHANNEL) {
    entity = {
      id,
      type,
      buffer: (function(str): ChannelBuffers {
        if (str === 'ch' || str === 'fixed') return ChannelBuffers.FIXED;
        if (str === 'sliding') return ChannelBuffers.SLIDING;
        if (str === 'dropping') return ChannelBuffers.DROPPING;
        console.warn(`Unrecognized buffer type "${str}".`);
        return ChannelBuffers.UNRECOGNIZED;
      })(id.split('_')[0]),
      ...restProps,
    };
  } else if (type === ItemType.ROUTINE) {
    entity = {
      id,
      type,
      ...restProps,
    };
  } else if (type === ItemType.STATE) {
    entity = {
      id,
      type,
      ...restProps,
    };
  } else {
    entity = {
      id,
      type: ItemType.UNRECOGNIZED,
      ...restProps,
    };
  }

  if (entity.children && entity.children.length > 0) {
    entity.children = entity.children.map(normalizeEntity);
  }
  return entity;
}
