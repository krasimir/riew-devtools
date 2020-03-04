import React, { useState, useEffect } from 'react';
import { SVG, Svg } from '@svgdotjs/svg.js';

import { SVGIcon } from './utils/icons';

interface Graph {
  update: Function;
}
interface GraphItem {
  id: string;
  title: string;
  children: GraphItem[];
}

const ROW_HEIGHT = 38;
const MMM = [
  {
    id: 'i1',
    title: 'Foo something very very very long here',
    children: [
      {
        id: 'i3',
        title: 'AAA',
        children: [],
      },
      {
        id: 'i4',
        title: 'BBB',
        children: [
          {
            id: 'i5',
            title: 'CCC',
          },
          {
            id: 'i6',
            title: 'DDD',
          },
        ],
      },
    ],
  },
  {
    id: 'i2',
    title: 'Bar',
  },
];

function trimText(str: string, n: number): string {
  if (str.length > n) {
    return `${str.substr(0, n)}...`;
  }
  return str;
}

function createEntityLabel(
  container: Svg,
  data: GraphItem,
  rendering: { numOfElements: number }
) {
  const label = container.nested().id(data.id as string);
  label.css('cursor', 'pointer');
  const background = label.rect(200, ROW_HEIGHT).attr({ fill: '#2a2a2a' });
  label.line([0, ROW_HEIGHT - 1, 200, ROW_HEIGHT - 1]).stroke({
    width: 1,
    color: '#444',
  });
  label
    .text(trimText(data.title, 20))
    .font({
      size: '1em',
    })
    .move(10, 10)
    .css('fill', 'white');
  label.on('mouseover', function() {
    background.attr({ fill: '#242424' });
  });
  label.on('mouseout', function() {
    background.attr({ fill: '#2a2a2a' });
  });
  label.move(0, rendering.numOfElements * ROW_HEIGHT);
  rendering.numOfElements += 1;
  if (data.children && data.children.length > 0) {
    label.svg(SVGIcon.MoreHorizontal(200 - 30, 7));
    data.children.forEach(child =>
      createEntityLabel(container, child, rendering)
    );
  }
  return label;
}

function drawGraph(data: GraphItem[]): Graph {
  const draw = SVG()
    .addTo('#graph')
    .size('100%', '100%');

  const rendering = { numOfElements: 0 };
  data.forEach(item => createEntityLabel(draw, item, rendering));

  return {
    update() {
      console.log('update');
    },
  };
}

export default function Graph() {
  const [g, setGraph] = useState<Graph | null>(null);

  useEffect(() => {
    setGraph(drawGraph(MMM as GraphItem[]));
  }, []);
  return <div id="graph" style={{ height: '100%' }}></div>;
}
