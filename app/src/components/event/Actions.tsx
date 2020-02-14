import React, { useState, useEffect } from 'react';

import { Container, Link, Dim } from '../ui';
import { SnapshotAction, ItemType } from '../../types';
import what2HumanReadable from '../../utils/what2HumanReadable';
import ItemRiew from './ItemRiew';
import ItemChannel from './ItemChannel';

let actionsExpanded = false;

function actionUI(action: SnapshotAction, idx: number) {
  // const who = identify(action.who);
  const { who } = action;
  const key = who.id + idx;

  if (who.type === ItemType.RIEW) {
    return (
      <Container key={key} p={0} m={0}>
        <Dim small>{what2HumanReadable(action.what)}</Dim>{' '}
        <ItemRiew data={who} />
      </Container>
    );
  }
  if (who.type === ItemType.CHANNEL) {
    return (
      <Container key={key} p={0} m={0}>
        <Dim small>{what2HumanReadable(action.what)}</Dim>{' '}
        <ItemChannel data={who} />
      </Container>
    );
  }

  return (
    <Container key={key} p={0} m={0}>
      <Dim small>{what2HumanReadable(action.what)}</Dim>{' '}
      {who.name ? who.name : who.type.toLowerCase()}{' '}
    </Container>
  );
}

interface ActionsProps {
  actions: SnapshotAction[];
}

export default function Actions({ actions }: ActionsProps) {
  const [expanded, expand] = useState(false);

  useEffect(() => {
    expand(actionsExpanded);
  }, []);

  if (!expanded) {
    return (
      <Container p={0} m="1em 0 0 0">
        <Link dim onClick={() => expand((actionsExpanded = true))}>
          ☰ actions ({actions.length})
        </Link>
      </Container>
    );
  }

  return (
    <Container p={0} m="1em 0 0 0">
      <Link dim onClick={() => expand((actionsExpanded = false))}>
        ⇨ actions ({actions.length})
      </Link>
      <Container p="0 0 0 1em">{actions.map(actionUI)}</Container>
    </Container>
  );
}
