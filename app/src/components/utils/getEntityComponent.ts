import { ItemType, ItemProps } from '../../types';

import RiewItem from '../frame/RiewItem';
import ChannelItem from '../frame/ChannelItem';
import StateItem from '../frame/StateItem';
import RoutineItem from '../frame/RoutineItem';
import UnknownItem from '../frame/UnknownItem';

const getEntityComponent = (type: ItemType): React.FC<ItemProps> =>
  ({
    [ItemType.RIEW]: RiewItem,
    [ItemType.CHANNEL]: ChannelItem,
    [ItemType.STATE]: StateItem,
    [ItemType.ROUTINE]: RoutineItem,
    [ItemType.UNRECOGNIZED]: UnknownItem,
  }[type] || UnknownItem);

export default getEntityComponent;
