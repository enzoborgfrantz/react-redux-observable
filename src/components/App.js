import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import Logo from './Logo';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

const Hello = ({ hello, updateTitle, asyncAction, bio, repos }) => (
  <Wrapper>
    <Logo />
    <Button> async action</Button>
  </Wrapper>
  );

const mapState = state => state;

const mapDispatch = dispatch => ({
  updateTitle: () => dispatch({ type: 'UPDATE_TITLE' }),
  asyncAction: () => dispatch({ type: 'ASYNC_ACTION' }),
});

export default connect(mapState, mapDispatch)(Hello);
