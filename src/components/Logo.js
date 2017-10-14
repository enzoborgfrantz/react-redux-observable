import styled from 'styled-components';
import React from 'react';
import { SwirlyBoi, SwirlyBoi75, SwirlyBoiContainer } from './SwirlyBoi';
import { rotate360, fade, glow } from '../styles/animations';
import { burgandy, cyan, white } from '../styles/colors';

const Title = styled.h1`
  font-size: 22px;
  font-family: Raleway;
  margin: 0;
`;

const SubTitle = styled(Title)`
  font-size: 18px;
`;

const LogoTitle = styled.div`
  text-align: center;
  color: white;
  opacity: 0.75;
  transition: all 0.35s ease-in;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export default () => (
  <SwirlyBoiContainer width={150} height={150}>
    <SwirlyBoi75 size={100} color={burgandy} width={10} animation={`${rotate360} 4s linear infinite, ${fade} 1.5s alternate infinite;`} />
    <SwirlyBoi75 size={80} color={cyan} width={8} animation={`${rotate360} 2s linear infinite, ${glow} 3s alternate infinite;`} />
    <SwirlyBoi size={60} color={white} width={1} />
    <LogoTitle>
      <Title>Redux</Title>
      <SubTitle>& RxJS</SubTitle>
    </LogoTitle>
  </SwirlyBoiContainer>
);
