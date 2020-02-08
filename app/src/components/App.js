import React, { useReducer, useEffect, useState } from 'react';
import bridge from '../bridge';
import Slider from './Slider';
import reducer from '../reducer';
import Frame from './frame';

export default function App() {
  const [events, addEvent] = useReducer(reducer, []);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    bridge(event => {
      addEvent(event);
    });
  }, []);

  return (
    <>
      <Slider events={events} onChange={setCurrent} />
      {current && <Frame event={current} />}
    </>
  );
}
