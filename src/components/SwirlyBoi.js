import styled from 'styled-components';
import React from 'react';

const SwirlyBoiContainerStyle = styled.div`
  width: ${props => props.width}px;
  min-height: ${props => props.height}px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const SwirlyBoiStyle = styled.div`
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

export const SwirlyBoi = ({ className, size, color, width, animation }) => (
  <SwirlyBoiStyle
    size={size}
    color={color}
    width={width}
    animation={animation}
    className={className}
  />);

export const SwirlyBoi75 = styled(SwirlyBoi)`
   border-left-color: transparent;
`;

export const SwirlyBoi50 = styled(SwirlyBoi)`
   border-left-color: transparent;
   border-right-color: transparent;
`;

export const SwirlyBoiContainer = ({ width, height, children }) => (
  <SwirlyBoiContainerStyle width={width} height={height}>
    {children}
  </SwirlyBoiContainerStyle>
);
