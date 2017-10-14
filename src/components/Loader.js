import React from 'react';
import { SwirlyBoi75, SwirlyBoiContainer } from './SwirlyBoi';
import { rotate360, fade, glow } from '../styles/animations';
import { burgandy, cyan } from '../styles/colors';

export default () => (
  <SwirlyBoiContainer width={40} height={40}>
    <SwirlyBoi75 size={100} color={burgandy} width={4} animation={`${rotate360} 4s linear infinite, ${fade} 1.5s alternate infinite;`} />
    <SwirlyBoi75 size={60} color={cyan} width={2} animation={`${rotate360} 2s linear infinite, ${glow} 3s alternate infinite;`} />
  </SwirlyBoiContainer>
);
