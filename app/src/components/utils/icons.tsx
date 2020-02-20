import React from 'react';
import { number, string } from 'prop-types';

interface IconProps {
  size?: number;
  style?: Record<string, any>;
}

export const Box: React.FC<IconProps> = ({ size }) => (
  <svg
    width={size || 14}
    height={size || 14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-box"
    style={{ transform: 'translateY(2px)' }}
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

export const Channel: React.FC<IconProps> = ({ size }) => (
  <svg
    width={size || 14}
    height={size || 14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-activity"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

export const CPU: React.FC<IconProps> = ({ size }) => (
  <svg
    style={{ transform: 'translateY(2px)' }}
    width={size || 14}
    height={size || 14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-cpu"
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
);

export const Database: React.FC<IconProps> = ({ size }) => (
  <svg
    style={{ transform: 'translateY(2px)' }}
    width={size || 14}
    height={size || 14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-database"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

export const Minus: React.FC<IconProps> = ({ size }) => (
  <svg
    style={{ transform: 'translateY(2px)' }}
    width={size || 14}
    height={size || 14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-minus"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export const Tool: React.FC<IconProps> = ({ size }) => (
  <svg
    style={{ transform: 'translateY(2px)' }}
    width={size || 14}
    height={size || 14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-tool"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

export const GitCommit: React.FC<IconProps> = ({ size }) => (
  <svg
    style={{ transform: 'translateY(2px)' }}
    width={size || 14}
    height={size || 14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-git-commit"
  >
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="1.05" y1="12" x2="7" y2="12"></line>
    <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
  </svg>
);

export const ArrowDownCircle: React.FC<IconProps> = ({ size, style }) => (
  <svg
    style={style}
    width={size || 22}
    height={size || 22}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-down-circle"
  >
    <circle cx="12" cy="12" r="10" fill="#555"></circle>
    <polyline points="8 12 12 16 16 12"></polyline>
    <line x1="12" y1="8" x2="12" y2="16"></line>
  </svg>
);

export const Chrome: React.FC<IconProps> = ({ size, style }) => (
  <svg
    style={style}
    width={size || 22}
    height={size || 22}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chrome"
  >
    <circle cx="12" cy="12" r="10" fill="#555"></circle>
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="21.17" y1="8" x2="12" y2="8"></line>
    <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
    <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
  </svg>
);

export const ArrowUpCircle: React.FC<IconProps> = ({ size, style }) => (
  <svg
    style={style}
    width={size || 22}
    height={size || 22}
    viewBox="0 0 24 24"
    fill="#555"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-up-circle"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="16 12 12 8 8 12"></polyline>
    <line x1="12" y1="16" x2="12" y2="8"></line>
  </svg>
);

export const CirclePlus: React.FC<IconProps> = ({ size, style }) => (
  <svg
    style={style}
    width={size || 22}
    height={size || 22}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-plus-circle"
  >
    <circle cx="12" cy="12" r="10" fill="#555"></circle>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

export const ArrowRightCircle: React.FC<IconProps> = ({ size, style }) => (
  <svg
    style={style}
    width={size || 22}
    height={size || 22}
    viewBox="0 0 24 24"
    fill="#555"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-right-circle"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 16 16 12 12 8"></polyline>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

export const ArrowRight: React.FC<IconProps> = ({ size, style }) => (
  <svg
    style={style}
    width={size || 22}
    height={size || 22}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-right"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export const ArrowUp: React.FC<IconProps> = ({ size, style }) => (
  <svg
    style={style}
    width={size || 22}
    height={size || 22}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-up"
  >
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

export const XCircle: React.FC<IconProps> = ({ size, style }) => (
  <svg
    style={style}
    width={size || 22}
    height={size || 22}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-x-circle"
  >
    <circle cx="12" cy="12" r="10" fill="#555"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
);

export const Circle: React.FC<IconProps> = ({ size, style }) => (
  <svg
    style={style}
    width={size || 22}
    height={size || 22}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-circle"
  >
    <circle cx="12" cy="12" r="10" fill="#555"></circle>
  </svg>
);

export const PlayCircle: React.FC<IconProps> = ({ size, style }) => (
  <svg
    style={style}
    width={size || 22}
    height={size || 22}
    viewBox="0 0 24 24"
    fill="#555"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-play-circle"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="10 8 16 12 10 16 10 8"></polygon>
  </svg>
);

export const StopCircle: React.FC<IconProps> = ({ size, style }) => (
  <svg
    style={style}
    width={size || 22}
    height={size || 22}
    viewBox="0 0 24 24"
    fill="#555"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-stop-circle"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <rect x="9" y="9" width="6" height="6"></rect>
  </svg>
);

export const AlertCircle: React.FC<IconProps> = ({ size, style }) => (
  <svg
    style={style}
    width={size || 22}
    height={size || 22}
    viewBox="0 0 24 24"
    fill="#555"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-alert-circle"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

export const CheckCircle: React.FC<IconProps> = ({ size, style }) => (
  <svg
    style={style}
    width={size || 22}
    height={size || 22}
    viewBox="0 0 24 24"
    fill="#555"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-check-circle"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);
