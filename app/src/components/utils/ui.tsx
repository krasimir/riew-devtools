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
  padding: ${props => ('p' in props ? props.p : '1em')};
  margin: ${props => ('m' in props ? props.m : 0)};
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
export const EventWrapper = styled(Container)`
  border: solid 2px #4d4d4d;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background: #242424;
    border-radius: 20px;
  }
`;
export const EventItemContainer = styled.div<{ indent?: number }>`
  padding: 0.2em 0 0.2em ${props => (props.indent ? props.indent + 0.6 : 0)}em;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const EventSeparator = styled.div<{ text: string; m?: string }>`
  margin: ${props => (props.m ? props.m : 0)};
  &::before {
    content: "${props => props.text}";
    font-size: 0.8em;
    opacity: 0.5;
    background: #242424;
    text-align: right;
    display: block;
  }
  &::after {
    content: " ";
    display: block;
    border-top: dotted 1px #4d4d4d;
    width: 100%;
    height: 2px;
  }
`;
