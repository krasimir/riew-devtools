import React, { useState } from 'react';

import { Container, Link } from '../ui';
import identify from '../../utils/identify';

function action(data, idx) {
  const who = identify(data.who);
  console.log(data);
  return (
    <Container key={who.id + idx} p={0} m={0}>
      {who.name ? who.name : who.type.toLowerCase()}
      {': '}
      {data.what}
    </Container>
  );
}

export default function Actions({ actions }) {
  const [expanded, expand] = useState(false);

  if (!expanded) {
    return (
      <Container p={0} m="1em 0 0 0">
        <Link dim onClick={() => expand(true)}>
          ☰ actions ({actions.length})
        </Link>
      </Container>
    );
  }
  return (
    <Container p={0} m="1em 0 0 0">
      <Link dim onClick={() => expand(false)}>
        ⇨ actions ({actions.length})
      </Link>
      <Container p="0 0 0 1em">{actions.map(action)}</Container>
    </Container>
  );
}
