import React, { useState, useEffect } from 'react';

import { Container, Link, Dim } from '../ui';
import { SnapshotAction, ItemType } from '../../types';
import identify from '../../utils/identify';
import what2HumanReadable from '../../utils/what2HumanReadable';

let actionsExpanded = false;

function action(data: SnapshotAction, idx: number) {
  const who = identify(data.who);
  const key = who.id + idx;

  if (who.type === ItemType.RIEW) {
    return (
      <Container key={key} p={0} m={0}>
        &lt;{who.name}&gt; <Dim>{what2HumanReadable(data.what)}</Dim>
      </Container>
    );
  }
  if (who.type === ItemType.CHANNEL) {
    return (
      <Container key={key} p={0} m={0}>
        &lt;{who.name}&gt; <Dim small>#{who.id}</Dim>{' '}
        <Dim>{what2HumanReadable(data.what)}</Dim>
      </Container>
    );
  }

  return (
    <Container key={key} p={0} m={0}>
      {who.name ? who.name : who.type.toLowerCase()}{' '}
      <Dim>{what2HumanReadable(data.what)}</Dim>
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
      <Container p="0 0 0 1em">{actions.map(action)}</Container>
    </Container>
  );
}
