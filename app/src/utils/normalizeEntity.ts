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
  // sliding_App_view_18
  // sliding_13

  if (type === ItemType.RIEW) {
    entity = {
      id: parts[2],
      rawId: id,
      type,
      name: parts[0],
      ...restProps,
    };
  } else if (type === ItemType.CHANNEL) {
    let normalizedId = '';
    let normalizedName = '';
    if (parts.length === 4) {
      normalizedId = parts[3];
      normalizedName = `${parts[2]}(${parts[1]})`;
    } else if (parts.length === 3) {
      normalizedId = parts[2];
      normalizedName = parts[1];
    } else if (parts.length === 2) {
      normalizedId = parts[1];
      normalizedName = `channel`;
    }
    entity = {
      id: normalizedId,
      rawId: id,
      type,
      name: normalizedName,
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
      name: parts[1],
      ...restProps,
    };
  } else if (type === ItemType.STATE) {
    entity = {
      id: parts[1],
      rawId: id,
      type,
      name: 'state',
      ...restProps,
    };
  } else {
    entity = {
      id,
      rawId: id,
      type: ItemType.UNRECOGNIZED,
      name: 'unknown',
      ...restProps,
    };
  }

  if (entity.children && entity.children.length > 0) {
    entity.children = entity.children.map(normalizeEntity);
  }
  return entity;
}
