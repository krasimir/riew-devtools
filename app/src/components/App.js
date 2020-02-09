import React, { useReducer, useEffect, useState } from 'react';
import styled from 'styled-components';
import bridge from '../bridge';
import Slider from './Slider';
import reducer from '../reducer';
import Event from './event';
import Info from './Info';
import { NavButton } from './ui';

const Nav = styled.div`
  border-top: solid 1px #000;
`;
const PageButton = styled(NavButton)`
  opacity: ${props => (props.selected ? 1 : 0.4)};
`;

export default function App() {
  const [events, addEvent] = useReducer(reducer, []);
  const [current, setCurrent] = useState(null);
  const [page, changePage] = useState('frames');

  useEffect(() => {
    bridge(event => {
      addEvent(event);
    });
  }, []);

  const Page = () => {
    switch (page) {
      case 'frames':
        return current ? <Event event={current} /> : null;
      case 'info':
        return <Info />;
      default:
        return null;
    }
  };

  return (
    <>
      <Slider events={events} onChange={setCurrent} />
      <Nav>
        <PageButton
          selected={page === 'frames'}
          onClick={() => changePage('frames')}
        >
          Frames {current ? `(${current.id})` : ''}
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
