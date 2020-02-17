import React, { useReducer, useEffect, useState } from 'react';
import styled from 'styled-components';
import bridge from '../bridge';
import Slider from './Slider';
import reducer from '../reducer';
import Frames from './Frames';
import Info from './Info';
import { NavButton } from './utils/ui';
import { Event } from '../types';

const Nav = styled.div`
  border-bottom: solid 1px #000;
`;
const PageButton = styled(NavButton)<{ selected: boolean }>`
  opacity: ${props => (props.selected ? 1 : 0.4)};
`;

export default function App() {
  const [events, addEvent] = useReducer(reducer, []);
  const [page, changePage] = useState<'frames' | 'info'>('frames');

  useEffect(() => {
    bridge((event: Event) => addEvent(event));
  }, []);

  const Page: React.FC = () => {
    switch (page) {
      case 'frames':
        return events.length > 0 ? <Frames events={events} /> : null;
      case 'info':
        return <Info />;
      default:
        return null;
    }
  };

  return (
    <>
      <Nav>
        <PageButton
          selected={page === 'frames'}
          onClick={() => changePage('frames')}
        >
          Frames
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
