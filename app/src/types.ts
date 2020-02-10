export type EventType = 'RIEW_NEW_SESSION' | 'RIEW_SNAPSHOT';
export type StateItemType = 'RIEW' | 'CHANNEL' | 'ROUTINE';

export type SnapshotAction = {
  who: string
  what: string
  meta: { [key:string]: any } | null
}

export type Channel = {
  id: string
  type: 'CHANNEL'
  value: any[]
  puts: { callback: () => void, item: any }[]
  takes: { read: boolean, listen: boolean }[]
}

export type Routine = {
  id: string
  type: 'ROUTINE'
  name: string
}

export type State = {
  id: string
  type: 'STATE'
  value: any,
  children: Channel[]
}

export type Riew = {
  id: string
  name: string,
  type: 'RIEW',
  viewDate: { [key:string]: any },
  children: (Channel|Routine|State)[]
}

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