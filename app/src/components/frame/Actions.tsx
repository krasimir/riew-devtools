import React from 'react';

import { Dim, EventItemContainer } from '../utils/ui';
import { SnapshotAction, ItemType } from '../../types';
import what2HumanReadable from '../../utils/what2HumanReadable';
import ItemRiew from './ItemRiew';
import ItemChannel from './ItemChannel';

function actionUI(action: SnapshotAction, idx: number) {
  // const who = identify(action.who);
  const { who } = action;
  const key = who.id + idx;

  if (who.type === ItemType.RIEW) {
    return (
      <EventItemContainer key={key}>
        <Dim small>{what2HumanReadable(action.what)}</Dim>{' '}
        <ItemRiew data={who} />
      </EventItemContainer>
    );
  }
  if (who.type === ItemType.CHANNEL) {
    return (
      <EventItemContainer key={key}>
        <Dim small>{what2HumanReadable(action.what)}</Dim>{' '}
        <ItemChannel data={who} />
      </EventItemContainer>
    );
  }
  return (
    <EventItemContainer key={key}>
      <Dim small>{what2HumanReadable(action.what)}</Dim>{' '}
      {who.name ? who.name : who.type.toLowerCase()}{' '}
    </EventItemContainer>
  );
}

interface ActionsProps {
  actions: SnapshotAction[];
}

export default function Actions({ actions }: ActionsProps) {
  return <>{actions.map(actionUI)}</>;
}
