import React, { useReducer, useEffect } from 'react';
import bridge from '../bridge';
import Frames from './Frames';
import { Container } from './utils/ui';
import { Event } from '../types';
import graphReducer, { initialState } from './reducers/graphReducer';

export default function App() {
  const [graph, addEvent] = useReducer(graphReducer, initialState);

  useEffect(() => {
    bridge((event: Event) => addEvent(event));
  }, []);

  return graph.rows.length > 0 ? (
    <Frames rows={graph.rows} columns={graph.columns} />
  ) : (
    <Container>😕 No events yet...</Container>
  );
}
