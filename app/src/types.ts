export enum EventType {
  RIEW_NEW_SESSION = 'RIEW_NEW_SESSION',
  RIEW_SNAPSHOT = 'RIEW_SNAPSHOT'
}

export enum ItemType {
  RIEW = 'RIEW',
  CHANNEL = 'CHANNEL',
  ROUTINE = 'ROUTINE',
  STATE = 'STATE',
  UNRECOGNIZED = 'UNRECOGNIZED'
};

export enum ChannelBuffers {
  FIXED = 'FIXED',
  SLIDING = 'SLIDING',
  DROPPING = 'DROPPING',
  UNRECOGNIZED = 'UNRECOGNIZED'
}

export type SnapshotAction = {
  who: string
  what: string
  meta: { [key:string]: any } | null
}

interface EntityInterface {
  id: string,
  type: string,
  name?: string
}

export type Channel = EntityInterface & {
  type: ItemType.CHANNEL
  puts?: { callback: () => void, item: any }[]
  takes?: { read: boolean, listen: boolean }[]
  buffer?: ChannelBuffers
  value?: any[],
}

export type Routine = EntityInterface & {
  type: ItemType.ROUTINE
}

export type State = EntityInterface & {
  type: ItemType.STATE
  value?: any
  children?: Channel[]
}

export type Riew = EntityInterface & {
  type: 'RIEW',
  viewDate?: { [key:string]: any },
  children?: (Channel|Routine|State)[]
}

export type Unrecognized = EntityInterface & {
  type: ItemType.UNRECOGNIZED
}

export type Entity = Channel | Routine | State | Riew | Unrecognized;

export interface Snapshot {
  actions: SnapshotAction[]
  state: (Riew|State|Channel|Routine)[]
}

export interface Event {
  id: number,
  type: EventType
  source: 'riew'
  origin: string
  time: number
  snapshot: Snapshot
}