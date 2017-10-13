import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import Logo from './Logo';
import Button from './Button';
import UserResult from './UserResult';
import Input from './Input';
import { navy } from '../styles/colors';
import { desktopWidth } from '../styles/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 25px 15px;
  background-color: ${navy};
`;

const Content = styled.div`
  width: 100%;
  background-color: ${navy};
  display: flex;
  justify-content: center;
  ${''}
`;

const UserResultContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;

  @media (${desktopWidth}) {
    padding: 0;
    max-width: 500px;
  }
`;

const Hello = ({ hello, updateTitle, asyncAction, bio, repos }) => (
  <Wrapper>
    <Header>
      <Logo />
      <br />
      <Input type="text" spellCheck="false" placeholder="Enter github username" />
    </Header>
    {/* <Button> async action</Button> */}
    <Content>
      <UserResultContainer>
        <UserResult
          firstResult
          avatar={'https://avatars2.githubusercontent.com/u/8377900?v=4'}
          username="enzoborgfrantz"
        />
        <UserResult
          avatar={'https://avatars2.githubusercontent.com/u/8377900?v=4'}
          username="enzoborgfrantz"
        />
        <UserResult
          lastResult
          avatar={'https://avatars2.githubusercontent.com/u/8377900?v=4'}
          username="enzoborgfrantz"
        />
      </UserResultContainer>
    </Content>
  </Wrapper>
  );

const mapState = state => state;

const mapDispatch = dispatch => ({
  updateTitle: () => dispatch({ type: 'UPDATE_TITLE' }),
  asyncAction: () => dispatch({ type: 'ASYNC_ACTION' }),
});

export default connect(mapState, mapDispatch)(Hello);
