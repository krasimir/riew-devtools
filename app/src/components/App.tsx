import React, { useReducer, useEffect, useState } from 'react';
import bridge from '../bridge';
import Frames from './Frames';
import Info from './Info';
import { Nav, PageButton, Container } from './utils/ui';
import { Event } from '../types';
import graphReducer, { initialState } from './reducers/graphReducer';

export default function App() {
  const [graph, addEvent] = useReducer(graphReducer, initialState);
  const [page, changePage] = useState<'frames' | 'info'>('frames');

  useEffect(() => {
    bridge((event: Event) => addEvent(event));
  }, []);

  const Page: React.FC = () => {
    switch (page) {
      case 'frames':
        return graph.rows.length > 0 ? (
          <Frames rows={graph.rows} columns={graph.columns} />
        ) : (
          <Container>😕 No events yet...</Container>
        );
      case 'info':
        return <Info />;
      default:
        return null;
    }
  };

  return (
    <>
      <Page />
      <Nav>
        <PageButton
          selected={page === 'frames'}
          onClick={() => changePage('frames')}
        >
          » Frames
        </PageButton>
        <PageButton
          selected={page === 'info'}
          onClick={() => changePage('info')}
        >
          » Info
        </PageButton>
      </Nav>
    </>
  );
}
