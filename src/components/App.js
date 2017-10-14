import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import Logo from './Logo';
import SearchInput from './SearchInput';
import UserResults from './UserResults';
import { navy, burgandy } from '../styles/colors';
import { desktopWidth } from '../styles/mediaQueries';
import Loader from './Loader';

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
  padding: 15px 15px;
  background-color: ${navy};
`;

const Content = styled.div`
  width: 100%;
  background-color: ${navy};
  display: flex;
  justify-content: center;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${burgandy};
  margin-top: 15px;

  @media (${desktopWidth}) {
    padding: 0;
    max-width: 700px;
  }
`;

const SearchInputWrapper = styled.div`
  width: 100%;
  @media (${desktopWidth}) {
    max-width: 500px;
  }
`;

const Hello = ({ hello, updateTitle, asyncAction, bio, repos }) => (
  <Wrapper>
    <Header>
      <Logo />
      <br />
      <SearchInputWrapper>
        <SearchInput />
      </SearchInputWrapper>
      <Divider />
    </Header>
    <Content>
      {/* <UserResults /> */}
      <Loader />
    </Content>
  </Wrapper>
  );

const mapState = state => state;

const mapDispatch = dispatch => ({
  updateTitle: () => dispatch({ type: 'UPDATE_TITLE' }),
  asyncAction: () => dispatch({ type: 'ASYNC_ACTION' }),
});

export default connect(mapState, mapDispatch)(Hello);
