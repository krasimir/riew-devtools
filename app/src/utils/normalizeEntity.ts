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
  // sliding_App_view_18
  // sliding_13

  if (type === ItemType.RIEW) {
    return {
      id: parts[2],
      rawId: id,
      type,
      name: parts[0],
      ...restProps,
    };
  }
  if (type === ItemType.CHANNEL) {
    return {
      id: parts.length === 4 ? parts[3] : parts[1],
      rawId: id,
      type,
      name: parts.length === 4 ? `${parts[2]}(${parts[1]})` : 'channel',
      buffer: (function(str): ChannelBuffers {
        if (str === 'ch' || str === 'fixed') return ChannelBuffers.FIXED;
        if (str === 'sliding') return ChannelBuffers.SLIDING;
        if (str === 'dropping') return ChannelBuffers.DROPPING;
        console.warn(`Unrecognized buffer type "${str}".`);
        return ChannelBuffers.UNRECOGNIZED;
      })(parts[0]),
      ...restProps,
    };
  }
  if (type === ItemType.ROUTINE) {
    return {
      id: parts[2],
      rawId: id,
      type,
      name: parts[1],
      ...restProps,
    };
  }
  if (type === ItemType.STATE) {
    return {
      id: parts[1],
      rawId: id,
      type,
      name: 'state',
      ...restProps,
    };
  }
  return {
    id,
    rawId: id,
    type: ItemType.UNRECOGNIZED,
    name: 'unknown',
    ...restProps,
  };
}
