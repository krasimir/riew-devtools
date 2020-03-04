/* eslint-disable no-script-url */

import styled, { keyframes } from 'styled-components';

export const FRAME_HEIGHT = 35;

type LinkProps = {
  block?: boolean;
  dim?: boolean;
  external?: boolean;
};

export type ContainerProps = {
  p?: string | 0;
  m?: string | 0;
  h?: number;
  w?: number;
  display?: string;
  columns?: string;
  rows?: string;
  bb?: string;
};

export type DimProps = {
  small?: boolean;
};

export const COLORS = {
  bg: '#242424',
  grey1: '#171717',
  grey2: '#2a2a2a',
  selected: '#213651',
};

const BG_PATTERN =
  'repeating-linear-gradient(45deg, transparent, transparent 35px, #2a2a2a 35px, #2a2a2a 70px)';

export const Container = styled.div<ContainerProps>`
  position: relative;
  padding: ${props => ('p' in props ? props.p : '0')};
  margin: ${props => ('m' in props ? props.m : 0)};
  height: ${props => ('h' in props ? `${props.h}px` : 'auto')};
  width: ${props => ('w' in props ? `${props.w}px` : 'auto')};
  display: ${props => ('display' in props ? props.display : 'block')};
  border-bottom: ${props => ('bb' in props ? props.bb : 'none')};
  grid-template-columns: ${props => ('columns' in props ? props.columns : '')};
  grid-template-rows: ${props => ('rows' in props ? props.rows : '')};
`;

export const AppContainer = styled(Container)`
  display: grid;
  grid-template-rows: 60% 40%;
  height: 100%;
`;

export const AppArea = styled(Container)`
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background: #242424;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-corner {
    background: #242424;
  }
`;

export const Line = styled.hr`
  border-top: none;
  border-bottom: solid 1px #434242;
  margin: 0.8em 0;
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 0.7em 1em;
  font-size: 0.8em;
  line-height: 1em;
  text-transform: uppercase;
  outline: none;
  transition: transform 300ms ease-out;
  cursor: pointer;
`;
export const NavButton = styled(Button)`
  background: #4d4d4d;
  color: #fff;
  &:hover {
    background: #767676;
    color: black;
  }
`;
export const Link = styled.a.attrs(props => ({
  href: props.href ? props.href : 'javascript:void(0)',
}))<LinkProps>`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  color: white;
  text-decoration: none;
  opacity: ${props => (props.dim ? 0.5 : 1)};
  &:hover {
    opacity: 0.8;
  }
  &:before {
    content: ${props => (props.external ? '"⇱ "' : '')};
  }
`;
export const CloseLink = styled(Link)<{ top?: string; right?: string }>`
  position: absolute;
  top: ${props => ('top' in props ? props.top : 0)};
  right: ${props => ('right' in props ? props.right : '0.4em')};
`;
export const Text = styled.p`
  margin: 0;
  & + p {
    padding: 0 0 1em 0;
  }
`;
export const Dim = styled.span<DimProps>`
  opacity: 0.5;
  font-size: ${props => (props.small ? '0.8em' : '1em')};
`;
export const FrameItemContainer = styled.div<{
  indent?: number;
  onClick?: Function;
}>`
  padding: 0.5em 0.5em 0.5em
    ${props => (props.indent ? props.indent + 0.5 : 0.5)}em;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  border-bottom: solid 1px #555;
  &:hover {
    color: ${props => (props.onClick ? 'white' : 'inherit')};
  }
`;
export const EntityFrameContainer = styled(Container)`
  padding: 0;
  position: relative;
  color: white;
  height: ${FRAME_HEIGHT}px;
  border-bottom: solid 2px #2a2a2a;
  max-width: 300px;
`;
export const EntitiesList = styled(Container)`
  background: #242424;
  overflow: hidden;
  border-right: solid 1px #555;
`;
export const NoEvents = styled(Container)`
  display: inline-grid;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 2em;
  background-color: #242424;
  background-image: ${BG_PATTERN};
`;
export const Title = styled.h1`
  margin: 0 0 2em 0;
`;
export const Code = styled.pre`
  border: solid 1px #555;
  padding: 1em;
  font-size: 0.9em;
  border-radius: 4px;
`;
export const Table = styled.table<ContainerProps>`
  border: 0;
  border-spacing: 0;
  border-collapse: separate;
  margin: ${props => ('m' in props ? props.m : 0)};
  table-layout: auto;
  white-space: nowrap;
`;
export const TR = styled.tr<ContainerProps>`
  height: ${props => ('h' in props ? `${props.h}px` : 'auto')};
`;
export const TD = styled.td<ContainerProps & { br?: string }>`
  padding: 0;
  height: ${props => ('h' in props ? `${props.h}px` : 'auto')};
  border-right: ${props => ('br' in props ? props.br : 'none')};
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const TooltipContainer = styled.div`
  position: absolute;
  top: 32px;
  right: 4px;
  background: white;
  z-index: 11;
  color: #242424;
  animation: ${fadeIn} 200ms ease-out;
  word-break: break-word;
  font-size: 0.9em;
  line-height: 1.2em;
  padding: 0.4em;
  text-align: center;
  border-radius: 2px;
  &::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #ffffff;
    top: -7px;
    right: 5px;
  }
`;
export const DetailsContainer = styled.div<{ bgpattern?: boolean }>`
  background-color: #242424;
  background-image: ${props => (props.bgpattern ? BG_PATTERN : '')};
  z-index: 12;
  height: ${props => (props.bgpattern ? '100%' : 'auto')};
  color: white;
  animation: ${fadeIn} 200ms ease-out;
  word-break: break-word;
  font-size: 1em;
  line-height: 1.2em;
  border: ${props => (props.bgpattern ? '' : 'solid 10px #242424')};
  overflow: auto;
  padding: 1em;
  pre {
    font-size: 0.9em;
    border-top: solid 2px #2a2a2a;
    margin: 0;
    padding: 0.5em;
    font-size: 0.9em;
    line-height: 1.2em;
    color: #999;
    strong {
      color: white;
    }
  }
`;

export const Empty = styled.div<{
  created: boolean | undefined;
  color: string;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  &::before {
    content: ' ';
    display: ${props => (props.created ? 'block' : 'none')};
    background: ${props => props.color};
    height: 4px;
    width: 100%;
    margin-top: 14px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const CIconContainer = styled.div`
  width: 22px;
  transform: translateY(5px);
  cursor: pointer;
`;
