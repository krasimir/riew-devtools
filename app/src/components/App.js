import React, { useReducer, useEffect } from 'react';
import bridge from '../bridge';
import Slider from './Slider';
import { MAX_EVENTS } from '../constants';

function reducer(state, event) {
  const newValue = state.concat([event]);
  if (newValue.length > MAX_EVENTS) {
    newValue.shift();
  }
  return newValue;
}

export default function App() {
  const [events, addEvent] = useReducer(reducer, []);

  useEffect(() => {
    bridge(event => {
      addEvent(event);
    });
  }, []);

  return (
    <div>
      <Slider events={events} onChange={event => console.log(event)} />
    </div>
  );
}
