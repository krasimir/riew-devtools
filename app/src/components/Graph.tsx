/* eslint-disable @typescript-eslint/no-use-before-define */

import React, { useState, useEffect } from 'react';
import { SVG, Svg } from '@svgdotjs/svg.js';

import { SVGIcon } from './utils/icons';
import { Entity, ItemType } from '../types';

interface GraphItem {
  id: string;
  update: Function;
  expanded: boolean;
  parent: string | undefined;
}
interface Graph {
  container: Svg | null;
  items: GraphItem[];
  update: Function;
  entityExists: Function;
}

const ROW_HEIGHT = 38;

const getIcon = (type: ItemType): Function =>
  ({
    [ItemType.RIEW]: SVGIcon.Code,
    [ItemType.CHANNEL]: SVGIcon.Activity,
    [ItemType.STATE]: SVGIcon.Database,
    [ItemType.ROUTINE]: SVGIcon.CPU,
    [ItemType.UNRECOGNIZED]: SVGIcon.Octagon,
  }[type] || SVGIcon.Octagon);

function trimText(str: string, n: number): string {
  if (str.length > n) {
    return `${str.substr(0, n)}...`;
  }
  return str;
}

function createGraphItem(entity: Entity, parent: string | undefined) {
  // defining the label
  const label = (graph.container as Svg)
    .nested()
    .id(entity.id as string)
    .css('cursor', 'pointer');

  function addMoreIcon(e: Entity) {
    if (!label.findOne(`.${e.id}-more-icon`)) {
      label.svg(
        SVGIcon.MoreHorizontal(
          200 - 30,
          7,
          undefined,
          undefined,
          `${entity.id}-more-icon`
        )
      );
    }
  }
  function decorate() {
    label.line([0, ROW_HEIGHT - 1, 200, ROW_HEIGHT - 1]).stroke({
      width: 1,
      color: '#444',
    });
    label.svg(getIcon(entity.type)(10, 10, 18));
  }
  function setText() {
    label
      .text(entity.name ? trimText(entity.name, 20) : '')
      .font({
        size: '1em',
      })
      .move(33, 10)
      .css('fill', 'white');
  }
  function addBackground() {
    const background = label.rect(200, ROW_HEIGHT).attr({ fill: '#2a2a2a' });
    label.on('mouseover', () => background.attr({ fill: '#242424' }));
    label.on('mouseout', () => background.attr({ fill: '#2a2a2a' }));
  }
  function setPosition() {
    // label.move(0, graph.items.length * ROW_HEIGHT);
  }

  const graphItem: GraphItem = {
    id: entity.id,
    parent,
    expanded: false,
    update(e: Entity) {
      createGraphItems(e.children, this.id);
    },
  };

  addBackground();
  decorate();
  setText();
  setPosition();
  createGraphItems(entity.children, graphItem.id);

  return graphItem;
}
function createGraphItems(
  es: Entity[] | undefined,
  parent?: string | undefined
) {
  if (es && es.length > 0) {
    es.forEach(item => {
      const graphItem = graph.entityExists(item);
      if (!graphItem) {
        const newItem = createGraphItem(item, parent);
        graph.items.push(newItem);
      } else {
        graphItem.update(item);
      }
    });
  }
}

const graph: Graph = {
  container: null,
  items: [],
  entityExists(entity: Entity): GraphItem | undefined {
    return this.items.find(registeredItem => registeredItem.id === entity.id);
  },
  update: createGraphItems,
};

export default function Graph({ entities }: { entities: Entity[] }) {
  const [g, setGraph] = useState<Graph | null>(null);

  useEffect(() => {
    if (g === null) {
      graph.container = SVG()
        .addTo('#graph')
        .size('100%', '100%');
      createGraphItems(entities);
      setGraph(graph);
    } else {
      g.update(entities);
    }
  }, [entities, g]);
  return <div id="graph" style={{ height: '100%' }}></div>;
}
