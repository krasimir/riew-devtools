import React, { useState, useEffect } from 'react';
import { Container } from './utils/ui';

interface ExpanderProps {
  id: string;
  children: React.ReactNode;
}

const cache: Record<string, boolean> = {};
const listeners: Record<string, Function[]> = {};

export default function Expander({ id, children }: ExpanderProps) {
  const [isExpanded, expand] = useState(!!cache[id]);

  useEffect(() => {
    const unsubscribe = Expander.listen(id, (value: boolean) => {
      expand(value);
    });

    return () => unsubscribe();
  }, [id, isExpanded]);

  return <Container p={0}>{isExpanded && children}</Container>;
}

Expander.toggle = (id: string) => {
  cache[id] = !cache[id];
  if (listeners[id]) {
    listeners[id].forEach(l => l(cache[id]));
  }
};
Expander.isExpanded = (id: string): boolean => cache[id];
Expander.listen = (id: string, callback: Function): Function => {
  if (!listeners[id]) listeners[id] = [];
  listeners[id].push(callback);
  return () => {
    listeners[id] = listeners[id].filter(l => l !== callback);
  };
};
