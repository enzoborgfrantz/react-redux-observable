import styled from 'styled-components';
import React from 'react';

import SwirlyBoi from './SwirlyBoi';

const Title = styled.h1`
  font-size: 22px;
  font-family: Raleway;
  transition: all 0.35s ease-in;
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
  <SwirlyBoi>
    <LogoTitle>
      <Title>Redux</Title>
      <SubTitle>& RxJS</SubTitle>
    </LogoTitle>
  </SwirlyBoi>
);
