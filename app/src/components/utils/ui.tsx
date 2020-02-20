/* eslint-disable no-script-url */

import styled from 'styled-components';

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
export const Container = styled.div<ContainerProps>`
  padding: ${props => ('p' in props ? props.p : '0')};
  margin: ${props => ('m' in props ? props.m : 0)};
  height: ${props => ('h' in props ? `${props.h}px` : 'auto')};
  width: ${props => ('w' in props ? `${props.w}px` : 'auto')};
  display: ${props => ('display' in props ? props.display : 'block')};
  border-bottom: ${props => ('bb' in props ? props.bb : 'none')};
  grid-template-columns: ${props => ('columns' in props ? props.columns : '')};
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
export const CloseLink = styled(Link)`
  position: absolute;
  top: 0;
  right: 0.4em;
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
export const RowEventButton = styled.button`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 1);
  padding: 0;
  margin: 0;
  width: 100%;
  height: 34px;
  outline: none;
  background: ${props => (props.color ? props.color : 'white')};
  opacity: 0.8;
  color: white;
  &:hover {
    opacity: 1;
  }
  svg {
    position: absolute;
    top: 5px;
    left: 6px;
  }
`;
export const NoEventPlaceholder = styled.div`
  width: 100%;
  height: 34px;
  border-right: solid 1px #2a2a2a;
  border-bottom: solid 1px #2a2a2a;
`;
export const RowsContainer = styled(Container)`
  background: #242424;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 180px;
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
