import React from 'react';

import { Line, Link, FramesWrapper } from './utils/ui';

export default function Info() {
  return (
    <FramesWrapper>
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
    </FramesWrapper>
  );
}
