/* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef, FC } from 'react';
import { TooltipContainer } from './utils/ui';
import { ItemType, SnapshotAction, TooltipContentProps } from '../types';
import ChannelTooltip from './frame/ChannelTooltip';
import RiewTooltip from './frame/RiewTooltip';
import RoutineTooltip from './frame/RoutineTooltip';
import StateTooltip from './frame/StateTooltip';
import UnknownTooltip from './frame/UnknownTooltip';

const TOOLTIP_WIDTH = 200;

let toggle = (v: boolean, data?: SnapshotAction): void => {};

const getContent = (type: ItemType): React.FC<TooltipContentProps> =>
  ({
    [ItemType.RIEW]: RiewTooltip,
    [ItemType.CHANNEL]: ChannelTooltip,
    [ItemType.STATE]: StateTooltip,
    [ItemType.ROUTINE]: RoutineTooltip,
    [ItemType.UNRECOGNIZED]: UnknownTooltip,
  }[type] || UnknownTooltip);

const Content = ({ data }: { data: SnapshotAction }) => {
  const C = getContent(data.who.type);

  return <C data={data} />;
};

export default function Tooltip() {
  const [visible, setVisibility] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [actionData, setActionData] = useState<SnapshotAction | null>(null);

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
      setVisibility(v);
      if (data) {
        setActionData(data);
      }
    };
  }, [visible]);

  return visible ? (
    <TooltipContainer
      style={{ top: `${top}px`, left: `${left}px` }}
      id="tooltip"
    >
      {actionData !== null ? <Content data={actionData} /> : null}
    </TooltipContainer>
  ) : null;
}

Tooltip.show = (data: SnapshotAction) => {
  toggle(true, data);
};
Tooltip.hide = () => {
  toggle(false);
};
