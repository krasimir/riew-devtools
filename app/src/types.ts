export enum EventType {
  RIEW_NEW_SESSION = 'RIEW_NEW_SESSION',
  RIEW_SNAPSHOT = 'RIEW_SNAPSHOT',
}

export enum ItemType {
  RIEW = 'RIEW',
  CHANNEL = 'CHANNEL',
  ROUTINE = 'ROUTINE',
  STATE = 'STATE',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export enum ChannelBuffers {
  FIXED = 'FIXED',
  SLIDING = 'SLIDING',
  DROPPING = 'DROPPING',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export enum What {
  RIEW_RENDERED = 'RIEW_RENDERED',
  RIEW_MOUNTED = 'RIEW_MOUNTED',
  RIEW_UNMOUNTED = 'RIEW_UNMOUNTED',
  RIEW_UPDATED = 'RIEW_UPDATED',
  RIEW_CREATED = 'RIEW_CREATED',
  CHANNEL_PUT_INITIATED = 'CHANNEL_PUT_INITIATED',
  CHANNEL_PUT_RESOLVED = 'CHANNEL_PUT_RESOLVED',
  CHANNEL_TAKE_INITIATED = 'CHANNEL_TAKE_INITIATED',
  CHANNEL_LISTEN = 'CHANNEL_LISTEN',
  CHANNEL_TAKE_RESOLVED = 'CHANNEL_TAKE_RESOLVED',
  CHANNEL_CREATED = 'CHANNEL_CREATED',
  CHANNEL_CLOSED = 'CHANNEL_CLOSED',
  CHANNEL_RESET = 'CHANNEL_RESET',
  ROUTINE_STOPPED = 'ROUTINE_STOPPED',
  ROUTINE_RERUN = 'ROUTINE_RERUN',
  ROUTINE_END = 'ROUTINE_END',
  ROUTINE_ASYNC_BEGIN = 'ROUTINE_ASYNC_BEGIN',
  ROUTINE_ASYNC_END = 'ROUTINE_ASYNC_END',
  ROUTINE_ASYNC_ERROR = 'ROUTINE_ASYNC_ERROR',
  ROUTINE_STARTED = 'ROUTINE_STARTED',
  STATE_VALUE_SET = 'STATE_VALUE_SET',
  STATE_DESTROYED = 'STATE_DESTROYED',
  STATE_CREATED = 'STATE_CREATED',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export type Meta = { [key: string]: any } | null;

interface EntityInterface {
  id: string;
  rawId: string;
  type: ItemType;
  name?: string;
  children?: Entity[];
  parent?: null | string;
}

export type Channel = EntityInterface & {
  type: ItemType.CHANNEL;
  puts?: { callback: () => void; item: any }[];
  takes?: { read: boolean; listen: boolean }[];
  buffer?: ChannelBuffers;
  value?: any[];
};

export type Routine = EntityInterface & {
  type: ItemType.ROUTINE;
};

export type State = EntityInterface & {
  type: ItemType.STATE;
  value?: any;
  children?: Channel[];
};

export type Riew = EntityInterface & {
  type: ItemType.RIEW;
  viewData?: { [key: string]: any };
  children?: (Channel | Routine | State)[];
};

export type Unrecognized = EntityInterface & {
  type: ItemType.UNRECOGNIZED;
};

export type Entity = Channel | Routine | State | Riew | Unrecognized;

export type SnapshotAction = {
  who: Entity;
  what: What;
  meta: Meta;
};

export type Snapshot = SnapshotAction[];

export interface Event {
  id: number;
  type: EventType;
  source: 'riew';
  origin: string;
  time: number;
  snapshot: Snapshot;
}

export interface ItemProps {
  data: Entity;
  expandable?: boolean;
}

export type GraphRowItem = EntityInterface & {
  children: GraphRowItem[];
};

export type EventButtonProps = ItemProps & {
  actions: SnapshotAction[];
  created?: boolean[];
};

export type TooltipContentProps = {
  data: SnapshotAction;
};
