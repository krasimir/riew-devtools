/* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { TooltipContainer } from './utils/ui';
import { Entity } from '../types';

const TOOLTIP_WIDTH = 200;

let toggle = (v: boolean, data?: Entity): void => {};

export default function Tooltip() {
  const [visible, setVisibility] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    document.onmousemove = function(e) {
      if (visible) {
        const cursorX = e.pageX;
        const cursorY = e.pageY;
        const div = document.querySelector('#tooltip');
        setLeft(
          cursorX > document.documentElement.clientWidth / 2
            ? cursorX - TOOLTIP_WIDTH - 10
            : cursorX + 10
        );
        if (div) {
          setTop(
            cursorY > document.documentElement.clientHeight / 2
              ? cursorY - div.clientHeight - 10
              : cursorY + 10
          );
        }
      }
    };
    toggle = (v, data) => {
      console.log(data);
      setVisibility(v);
    };
  }, [visible]);

  return visible ? (
    <TooltipContainer
      style={{ top: `${top}px`, left: `${left}px` }}
      id="tooltip"
    >
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
