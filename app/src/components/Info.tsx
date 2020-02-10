import React from 'react';
import styled from 'styled-components';

import { Line, Link } from './ui';

const InfoWrapper = styled.div`
  padding: 1em;
  border: solid 2px #4d4d4d;
`;

export default function Info() {
  return (
    <InfoWrapper>
      Riew is a reactive library that uses CSP concepts for managing data and
      application flow.
      <Line />
      <Link
        href="https://github.com/krasimir/riew"
        target="_blank"
        block
        external
      >
        Documentation
      </Link>
      <Link
        href="https://krasimirtsonev.com/blog/category/Riew"
        target="_blank"
        block
        external
      >
        Introduction series
      </Link>
      <Link
        href="https://krasimirtsonev.com/blog/"
        target="_blank"
        block
        external
      >
        Author
      </Link>
    </InfoWrapper>
  );
}
