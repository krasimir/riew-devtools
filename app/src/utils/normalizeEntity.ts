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
  const parts = id.split('_');
  let entity: Entity;
  // sliding_App_18
  // sliding_13

  if (type === ItemType.RIEW) {
    entity = {
      id: parts[2],
      rawId: id,
      type,
      ...restProps,
    };
  } else if (type === ItemType.CHANNEL) {
    let normalizedId = '';
    if (parts.length === 3) {
      normalizedId = parts[2];
    } else if (parts.length === 2) {
      normalizedId = parts[1];
    }
    entity = {
      id: normalizedId,
      rawId: id,
      type,
      buffer: (function(str): ChannelBuffers {
        if (str === 'ch' || str === 'fixed') return ChannelBuffers.FIXED;
        if (str === 'sliding') return ChannelBuffers.SLIDING;
        if (str === 'dropping') return ChannelBuffers.DROPPING;
        console.warn(`Unrecognized buffer type "${str}".`);
        return ChannelBuffers.UNRECOGNIZED;
      })(parts[0]),
      ...restProps,
    };
  } else if (type === ItemType.ROUTINE) {
    entity = {
      id: parts[2],
      rawId: id,
      type,
      ...restProps,
    };
  } else if (type === ItemType.STATE) {
    entity = {
      id: parts[1],
      rawId: id,
      type,
      ...restProps,
    };
  } else {
    entity = {
      id,
      rawId: id,
      type: ItemType.UNRECOGNIZED,
      ...restProps,
    };
  }

  if (entity.children && entity.children.length > 0) {
    entity.children = entity.children.map(normalizeEntity);
  }
  return entity;
}
