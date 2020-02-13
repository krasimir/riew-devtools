import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RCSlider from 'rc-slider';
import styled from 'styled-components';

import { Event } from '../types';

const SliderWrapper = styled.div`
  padding: 1em;
`;

interface SliderProps {
  events: Event[];
  onChange: (event: Event) => void;
}
type Mark = {
  [key: string]: { style: string; label: string };
};

export default function Slider({ events, onChange }: SliderProps) {
  const [sliderValue, setSliderValue] = useState<number | undefined>();
  const [snapToTheEnd, snap] = useState<boolean>(true);

  useEffect(() => {
    if (snapToTheEnd) {
      setSliderValue(events.length - 1);
      onChange(events[events.length - 1]);
    }
  }, [events, events.length, onChange, snapToTheEnd]);

  const marks: Mark = {};
  for (let i = 0; i < events.length; i++) {
    marks[i] = {
      style: '',
      label: '',
    };
  }
  return (
    <SliderWrapper>
      <RCSlider
        min={0}
        max={events.length - 1}
        value={sliderValue}
        marks={marks}
        onChange={(v: number) => {
          setSliderValue(v);
          snap(v === events.length - 1);
          onChange(events[v]);
        }}
      />
    </SliderWrapper>
  );
}

Slider.props = {
  events: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
