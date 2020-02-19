import React from 'react';

interface TruncateProps {
  children: string | undefined;
  length: number;
}

export default function Truncate({ children, length }: TruncateProps) {
  if (!children) return null;
  if (children.length > length) {
    return <>{`${children.substr(0, length)}...`}</>;
  }
  return <>{children}</>;
}

Truncate.defaultProps = {
  length: 13,
};
