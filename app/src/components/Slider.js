import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RCSlider from 'rc-slider';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  padding: 1em;
`;

export default function Slider({ events, onChange }) {
  const [sliderValue, setSliderValue] = useState(null);
  const [snapToTheEnd, snap] = useState(true);

  useEffect(() => {
    if (snapToTheEnd) {
      setSliderValue(events.length);
      onChange(events[events.length - 1]);
    }
  }, [events, events.length, onChange, snapToTheEnd]);

  const marks = {};
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
        max={events.length}
        value={sliderValue}
        marks={marks}
        onChange={v => {
          setSliderValue(v);
          snap(v === events.length);
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
