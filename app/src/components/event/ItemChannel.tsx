import React from 'react';
import PropTypes from 'prop-types';
import { Channel as ChannelIcon } from '../icons';
import { Channel } from '../../types';

interface ItemRiewProps {
  channel: Channel;
}

export default function ItemChannel({ channel }: ItemRiewProps) {
  return (
    <>
      <ChannelIcon /> {channel.name}#{channel.id}
    </>
  );
}

ItemChannel.propTypes = {
  channel: PropTypes.object.isRequired,
};
