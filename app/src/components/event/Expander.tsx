import React, { useState, useEffect } from 'react';
import { Container } from '../ui';

interface ExpanderProps {
  id: string;
  children: React.ReactNode;
}

const cache: Record<string, boolean> = {};
const listeners: Record<string, Function[]> = {};
const listen = (id: string, callback: Function): Function => {
  if (!listeners[id]) listeners[id] = [];
  listeners[id].push(callback);
  return () => {
    listeners[id] = listeners[id].filter(l => l !== callback);
  };
};

export default function Expander({ id, children }: ExpanderProps) {
  const [isExpanded, expand] = useState(!!cache[id]);

  useEffect(() => {
    const unsubscribe = listen(id, () => {
      expand(!isExpanded);
      cache[id] = !isExpanded;
    });

    return () => unsubscribe();
  }, [id, isExpanded]);

  return <Container p={0}>{isExpanded && children}</Container>;
}

Expander.toggle = (id: string) => {
  if (listeners[id]) {
    listeners[id].forEach(l => l());
  }
};
Expander.isExpanded = (id: string): boolean => cache[id];
