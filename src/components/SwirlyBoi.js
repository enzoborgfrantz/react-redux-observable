import styled from 'styled-components';
import React from 'react';
import { rotate360, fade, glow } from '../styles/animations';
import { burgandy, cyan, white } from '../styles/colors';

const SwirlyBoiContainer = styled.div`
  width: 150px;
  min-height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: ${props => props.size}%;
  height: ${props => props.size}%;
  border-radius: 100%;
  border-style: solid;
  border-color: ${props => props.color};
  box-sizing: border-box;
  border-width: ${props => props.width}px;
  animation: ${props => props.animation};
`;

const SwirlyBoiBase = styled(Circle)`
  border-left-color: transparent;
  border-right-color: transparent;
`;

export default ({ children }) => (
  <SwirlyBoiContainer>
    <SwirlyBoiBase size={100} color={burgandy} width={10} animation={`${rotate360} 4s linear infinite, ${fade} 1.5s alternate infinite;`} />
    <SwirlyBoiBase size={80} color={cyan} width={8} animation={`${rotate360} 2s linear infinite, ${glow} 3s alternate infinite;`} />
    <Circle size={60} color={white} width={1} />
    {children}
  </SwirlyBoiContainer>
);
