import React, { useReducer, useEffect, useState } from 'react';
import styled from 'styled-components';
import bridge from '../bridge';
import Slider from './Slider';
import reducer from '../reducer';
import EventUI from './event/EventUI';
import Info from './Info';
import { NavButton } from './ui';
import { Event } from '../types';

const Nav = styled.div`
  border-top: solid 1px #000;
`;
const PageButton = styled(NavButton)<{ selected: boolean }>`
  opacity: ${props => (props.selected ? 1 : 0.4)};
`;

export default function App() {
  const [events, addEvent] = useReducer(reducer, []);
  const [current, setCurrent] = useState<Event|null>(null);
  const [page, changePage] = useState<'frames'|'info'>('frames');

  useEffect(() => {
    bridge((event:Event) => addEvent(event));
  }, []);

  const Page:React.FC = () => {
    switch (page) {
      case 'frames':
        return current ? <EventUI event={current} /> : null;
      case 'info':
        return <Info />;
      default:
        return null;
    }
  };

  return (
    <>
      <Slider events={events} onChange={setCurrent}/>
      <Nav>
        <PageButton
          selected={page === 'frames'}
          onClick={() => changePage('frames')}
        >
          Frames{' '}
          {current ? (
            <small style={{ opacity: 0.4, lineHeight: 0 }}>#{current.id}</small>
          ) : (
            ''
          )}
        </PageButton>
        <PageButton
          selected={page === 'info'}
          onClick={() => changePage('info')}
        >
          Info
        </PageButton>
      </Nav>
      <Page />
    </>
  );
}
