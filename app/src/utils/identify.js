import { TYPES } from '../constants';

const CHANNELS_IDENTIFIERS = ['ch', 'fixed', 'sliding', 'dropping'];

export default function identify(id) {
  const parts = id.split('_');

  if (parts[1] === 'riew') {
    return {
      id,
      type: TYPES.RIEW,
      name: parts[0],
    };
  }
  if (CHANNELS_IDENTIFIERS.includes(parts[0])) {
    return {
      id,
      type: TYPES.CHANNEL,
      buffer: (function(str) {
        if (str === 'ch' || str === 'fixed') return TYPES.BUFFER_TYPES.FIXED;
        if (str === 'sliding') return TYPES.BUFFER_TYPES.SLIDING;
        if (str === 'dropping') return TYPES.BUFFER_TYPES.DROPPING;
        console.warn(`Unrecognized buffer type "${str}".`);
        return str;
      })(parts[0]),
    };
  }
  if (parts[0] === 'routine') {
    return {
      id,
      type: TYPES.ROUTINE,
      name: parts[1],
    };
  }
  if (parts[0] === 'state') {
    return {
      id,
      type: TYPES.STATE,
      name: 'state',
    };
  }
  console.warn(`Unrecognized "${id}".`);
  return { id, type: TYPES.UNRECOGNIZED, name: 'unknown' };
}

/*
channels:
  ch_n
  fixed_n
  sliding_n
  dropping_n
*/
