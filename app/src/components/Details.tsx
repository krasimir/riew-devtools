/* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { DetailsContainer, CloseLink, Container } from './utils/ui';
import { SnapshotAction, What } from '../types';
import getEntityComponent from './utils/getEntityComponent';
import { X, ArrowRight } from './utils/icons';

const PROPS_TO_IGNORE = ['children', 'rawId', 'type', 'puts', 'takes'];
const PROPS_WITH_NO_LABEL = ['what', 'meta'];

let toggle = (v: boolean, data?: SnapshotAction): void => {};

const Content = ({ data }: { data: SnapshotAction }) => {
  const Who = getEntityComponent(data.who.type);

  return <Who data={data.who} expandable={false} />;
};

export const toFriendlyWhat = (str: What): string => {
  if (str === What.RIEW_RENDERED) return 'Rendered';
  if (str === What.RIEW_MOUNTED) return 'Mounted';
  if (str === What.RIEW_UNMOUNTED) return 'Unmounted';
  if (str === What.RIEW_UPDATED) return 'Updated';
  if (str === What.RIEW_CREATED) return 'Created';
  if (str === What.CHANNEL_PUT_INITIATED) return 'Put initiated';
  if (str === What.CHANNEL_PUT_RESOLVED) return 'Put successfully';
  if (str === What.CHANNEL_TAKE_INITIATED) return 'Take initiated';
  if (str === What.CHANNEL_TAKE_RESOLVED) return 'Take successfully';
  if (str === What.CHANNEL_LISTEN) return 'Listening';
  if (str === What.CHANNEL_CREATED) return 'Created';
  if (str === What.CHANNEL_CLOSED) return 'Closed';
  if (str === What.CHANNEL_RESET) return 'Reset';
  if (str === What.ROUTINE_STOPPED) return 'Stop';
  if (str === What.ROUTINE_RERUN) return 'Re-run';
  if (str === What.ROUTINE_END) return 'End';
  if (str === What.ROUTINE_ASYNC_BEGIN) return 'Async operation begin';
  if (str === What.ROUTINE_ASYNC_END) return 'Async operation end';
  if (str === What.ROUTINE_ASYNC_ERROR) return 'Async operation error';
  if (str === What.ROUTINE_STARTED) return 'Start';
  if (str === What.STATE_VALUE_SET) return 'New value';
  if (str === What.STATE_DESTROYED) return 'Destroyed';
  if (str === What.STATE_CREATED) return 'Created';
  return str;
};

export default function Details() {
  const [visible, setVisibility] = useState(false);
  const [actionData, setActionData] = useState<SnapshotAction | null>(null);

  useEffect(() => {
    document.body.addEventListener('keyup', e => {
      if (e.which === 27) {
        Details.hide();
      }
    });
  }, []);

  useEffect(() => {
    toggle = (v, data) => {
      setVisibility(v);
      if (data) {
        setActionData(data);
      }
    };
  }, [visible]);

  const fields = actionData
    ? {
        meta: actionData.meta,
        ...actionData.who,
      }
    : {};
  const detailsContent: JSX.Element[] | string = actionData
    ? Object.keys(fields).reduce((res: JSX.Element[], prop) => {
        if (!PROPS_TO_IGNORE.includes(prop)) {
          res.push(
            <Container key={prop}>
              <pre>
                {!PROPS_WITH_NO_LABEL.includes(prop) ? (
                  <>
                    <strong>{prop}</strong>{' '}
                  </>
                ) : (
                  ''
                )}
                {JSON.stringify((fields as any)[prop], null, 2)}
              </pre>
            </Container>
          );
        }
        return res;
      }, [])
    : '';

  return visible ? (
    <DetailsContainer id="tooltip">
      {actionData !== null ? <Content data={actionData} /> : null} 👉🏼{' '}
      {actionData && toFriendlyWhat(actionData.what)}
      <Container m="1em 0 0 0">{detailsContent}</Container>
      <CloseLink onClick={() => Details.hide()} top="1em" right="1.4em">
        <X />
      </CloseLink>
    </DetailsContainer>
  ) : (
    <DetailsContainer bgpattern />
  );
}

Details.show = (data: SnapshotAction) => {
  toggle(true, data);
};
Details.hide = () => {
  toggle(false);
};
