import { ChannelBuffers, ItemType, Entity } from '../types'

export default function identify(id:string): Entity {
  const parts = id.split('_');

  if (parts[1] === 'riew') {
    return {
      id,
      type: ItemType.RIEW,
      name: parts[0],
    };
  }
  if (parts[0] in ChannelBuffers) {
    return {
      id,
      type: ItemType.CHANNEL,
      name: 'channel',
      buffer: (function(str) {
        if (str === 'ch' || str === 'fixed') return ChannelBuffers.FIXED;
        if (str === 'sliding') return ChannelBuffers.SLIDING;
        if (str === 'dropping') return ChannelBuffers.DROPPING;
        console.warn(`Unrecognized buffer type "${str}".`);
        return ChannelBuffers.UNRECOGNIZED;
      })(parts[0]),
    };
  }
  if (parts[0] === 'routine') {
    return {
      id,
      type: ItemType.ROUTINE,
      name: parts[1],
    };
  }
  if (parts[0] === 'state') {
    return {
      id,
      type: ItemType.STATE,
      name: 'state',
    };
  }
  console.warn(`Unrecognized "${id}".`);
  return { id, type: ItemType.UNRECOGNIZED, name: 'unknown' };
}
