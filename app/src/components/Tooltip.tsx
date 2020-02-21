/* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { TooltipContainer } from './utils/ui';
import { Entity } from '../types';

let toggle = (v: boolean, data?: Entity): void => {};

export default function Tooltip() {
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    toggle = (v, data) => {
      setVisibility(v);
    };
  }, []);

  return visible ? (
    <TooltipContainer>
      Foo bar foo bar is the longest phrase that I can think of.
    </TooltipContainer>
  ) : null;
}

Tooltip.show = (data: Entity) => {
  toggle(true, data);
};
Tooltip.hide = () => {
  toggle(false);
};
