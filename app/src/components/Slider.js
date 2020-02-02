import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import KeyHandler, { KEYDOWN } from 'react-key-handler';
import { MAX_EVENTS, COLORS } from '../constants';

const SLIDER_HEIGHT = 14;

const SliderContainer = styled.div`
  border-bottom: solid 1px ${COLORS.grey1};
  height: ${SLIDER_HEIGHT + 1}px;
  overflow: hidden;
`;
const Frame = styled.div`
  display: inline-block;
  width: ${props => `${props.w}%`};
  height: ${SLIDER_HEIGHT}px;
  background: ${props => (props.selected ? COLORS.selected : '#000')};
  & + & {
    border-left: solid 1px ${COLORS.grey1};
  }
  cursor: pointer;
  transition: background 250ms ease-out;
  &:hover {
    background: ${props => (props.selected ? COLORS.selected : COLORS.grey1)};
  }
`;

export default function Slider({ events, onChange }) {
  const [selected, select] = useState(null);

  function pickPrevious(e) {
    e.preventDefault();
    if (selected === null) {
      select(events[events.length - 2].id);
    } else {
      const idx = events.findIndex(({ id }) => id === selected);
      if (idx > 0) {
        select(events[idx - 1].id);
      }
    }
  }
  function pickNext(e) {
    e.preventDefault();
    if (selected !== null) {
      const idx = events.findIndex(({ id }) => id === selected);
      if (idx >= 0 && idx < events.length - 1) {
        select(events[idx + 1].id);
      }
    }
  }

  useEffect(() => {
    if (events.length > 0) {
      if (select === null) {
        onChange(events[events.length - 1]);
      } else {
        const event = events.find(({ id }) => id === selected);
        onChange(event || events[events.length - 1]);
      }
    }
  }, [events, onChange, selected]);

  if (events.length > 1) {
    const max = events.length > MAX_EVENTS ? MAX_EVENTS : events.length;
    return (
      <SliderContainer>
        <KeyHandler
          keyEventName={KEYDOWN}
          code="ArrowLeft"
          onKeyHandle={pickPrevious}
        />
        <KeyHandler
          keyEventName={KEYDOWN}
          code="ArrowRight"
          onKeyHandle={pickNext}
        />
        {events.map((event, idx) => (
          <Frame
            onClick={() => select(event.id)}
            w={100 / max}
            key={event.id}
            selected={
              selected !== null
                ? selected === event.id
                : idx === events.length - 1
            }
          />
        ))}
      </SliderContainer>
    );
  }
  return null;
}

Slider.props = {
  events: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
