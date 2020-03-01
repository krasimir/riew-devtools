import React, { useReducer, useEffect } from 'react';
import bridge from '../bridge';
import Frames from './Frames';
import { NoEvents, Code, Title, AppContainer, AppArea } from './utils/ui';
import Tooltip from './Tooltip';
import Details from './Details';
import { Sad } from './utils/icons';
import { Event } from '../types';
import graphReducer, { initialState } from './reducers/graphReducer';

export default function App() {
  const [graph, addEvent] = useReducer(graphReducer, initialState);

  useEffect(() => {
    bridge((event: Event) => addEvent(event));
  }, []);

  return graph.rows.length > 0 ? (
    <AppContainer>
      <AppArea bb="solid 4px #2a2a2a">
        <Frames rows={graph.rows} columns={graph.columns} />
        <Tooltip />
      </AppArea>
      <AppArea>
        <Details />
      </AppArea>
    </AppContainer>
  ) : (
    <NoEvents>
      <div>
        <Title>
          <Sad /> No events yet...
        </Title>
        <p>Or maybe you forgot to run the Riew inspector:</p>
        <Code>{`import { inspector } from 'riew';

inspector();`}</Code>
      </div>
    </NoEvents>
  );
}
