import React from 'react';
import { CIconContainer } from './ui';

interface IconProps {
  size?: number;
  style?: Record<string, any>;
}

export const CIcon = ({ type }: { type: string }) => (
  <CIconContainer>
    <i className={`gg-${type}`}></i>
  </CIconContainer>
);

const Box = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-box ${cls}"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
`;

const Activity = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-activity ${cls}"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
`;

const CPU = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-cpu ${cls}"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
  </svg>
`;

const Database = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-database ${cls}"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
`;

const Minus = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-minus ${cls}"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
`;

const Tool = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-tool ${cls}"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
`;

const GitCommit = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-git-commit ${cls}"
  >
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="1.05" y1="12" x2="7" y2="12"></line>
    <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
  </svg>
`;

const MoreHorizontal = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-more-horizontal ${cls}"
  >
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="19" cy="12" r="1"></circle>
    <circle cx="5" cy="12" r="1"></circle>
  </svg>
`;

const ArrowDownCircle = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-arrow-down-circle ${cls}"
  >
    <circle cx="12" cy="12" r="10" fill="none"></circle>
    <polyline points="8 12 12 16 16 12"></polyline>
    <line x1="12" y1="8" x2="12" y2="16"></line>
  </svg>
`;

const Chrome = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-chrome ${cls}"
  >
    <circle cx="12" cy="12" r="10" fill="none"></circle>
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="21.17" y1="8" x2="12" y2="8"></line>
    <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
    <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
  </svg>
`;

const ArrowUpCircle = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-arrow-up-circle ${cls}"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="16 12 12 8 8 12"></polyline>
    <line x1="12" y1="16" x2="12" y2="8"></line>
  </svg>
`;

const CirclePlus = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-plus-circle ${cls}"
  >
    <circle cx="12" cy="12" r="10" fill="none"></circle>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
`;

const Plus = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-plus ${cls}"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
`;

const Image = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-image ${cls}"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
`;

const ArrowRightCircle = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-arrow-right-circle ${cls}"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 16 16 12 12 8"></polyline>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
`;

const ArrowRight = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-arrow-right ${cls}"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
`;

const ArrowUp = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-arrow-up ${cls}"
  >
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
`;

const XCircle = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-x-circle ${cls}"
  >
    <circle cx="12" cy="12" r="10" fill="none"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
`;

const Circle = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-circle ${cls}"
  >
    <circle cx="12" cy="12" r="10" fill="none"></circle>
  </svg>
`;

const PlayCircle = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-play-circle ${cls}"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="10 8 16 12 10 16 10 8"></polygon>
  </svg>
`;

const StopCircle = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-stop-circle ${cls}"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <rect x="9" y="9" width="6" height="6"></rect>
  </svg>
`;

const AlertCircle = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-alert-circle ${cls}"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
`;

const CheckCircle = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-check-circle ${cls}"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
`;

const Download = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-download ${cls}"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
`;

const Upload = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-upload ${cls}"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
`;

const LogIn = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-log-in ${cls}"
  >
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
    <polyline points="10 17 15 12 10 7"></polyline>
    <line x1="15" y1="12" x2="3" y2="12"></line>
  </svg>
`;

const LogOut = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-log-out ${cls}"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
`;

const X = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-x ${cls}"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
`;

const Play = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-play ${cls}"
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
`;

const Loading = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-loader ${cls}"
  >
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>
`;

const Star = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-star ${cls}"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
`;

const Sad = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-frown ${cls}"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
    <line x1="9" y1="9" x2="9.01" y2="9"></line>
    <line x1="15" y1="9" x2="15.01" y2="9"></line>
  </svg>
`;

const Headphones = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${color}"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-headphones ${cls}"
  >
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
  </svg>
`;

const Code = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    stroke="${color}"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-code ${cls}"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
`;

const Octagon = (
  x = 0,
  y = 0,
  size = 24,
  color = '#FFF',
  cls = 'svg-icon'
): string => `
  <svg
    x="${x}"
    y="${y}"
    width="${size}"
    height="${size}"
    stroke="${color}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-octagon ${cls}"
    >
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
  </svg>;
`;

export const SVGIcon = {
  Code,
  Octagon,
  AlertCircle,
  ArrowDownCircle,
  ArrowRight,
  ArrowRightCircle,
  ArrowUp,
  ArrowUpCircle,
  Box,
  Activity,
  CheckCircle,
  Chrome,
  CIcon,
  Circle,
  CirclePlus,
  CPU,
  Database,
  Download,
  GitCommit,
  Headphones,
  Image,
  Loading,
  LogIn,
  LogOut,
  Minus,
  MoreHorizontal,
  Play,
  PlayCircle,
  Plus,
  Sad,
  Star,
  StopCircle,
  Tool,
  Upload,
  X,
  XCircle,
};
