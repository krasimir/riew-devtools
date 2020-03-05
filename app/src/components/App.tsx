import React, { useReducer, useEffect } from 'react';
import bridge from '../bridge';
import { NoEvents, Title, AppContainer, AppArea } from './utils/ui';
import Details from './Details';
import Graph from './Graph';
import { Event } from '../types';
import graphReducer, { initialState } from './reducers/graphReducer';

export default function App() {
  const [graph, addEvent] = useReducer(graphReducer, initialState);

  useEffect(() => {
    bridge((event: Event) => addEvent(event));
  }, []);

  return graph.entities.length > 0 ? (
    <AppContainer>
      <AppArea bb="solid 4px #2a2a2a">
        <Graph entities={graph.entities} />
      </AppArea>
      <AppArea>
        <Details />
      </AppArea>
    </AppContainer>
  ) : (
    <NoEvents>
      <div>
        <Title>
          <img src="./img/logo.jpg" alt="logo" />
        </Title>
      </div>
    </NoEvents>
  );
}
