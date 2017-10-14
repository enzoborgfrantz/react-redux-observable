import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import UserResult from './UserResult';
import { desktopWidth } from '../styles/mediaQueries';
import Loader from './Loader';

const UserResultContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  justify-content: center;

  @media (${desktopWidth}) {
    padding: 0;
    max-width: 500px;
  }
`;

const LoaderWrapper = styled.div`
  padding: 25px 0;
`;

const UserResults = ({ loading, results }) => (
  <UserResultContainer>
    {loading ? (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    ) : (
      <div style={{ width: '100%' }}>
        <UserResult
          firstResult
          avatar={'https://avatars2.githubusercontent.com/u/8377900?v=4'}
          username="enzoborgfrantz"
          location="Berlin"
        />
        <UserResult
          avatar={'https://avatars2.githubusercontent.com/u/8377900?v=4'}
          username="enzoborgfrantz"
          location="Berlin"
        />
        <UserResult
          avatar={'https://avatars2.githubusercontent.com/u/8377900?v=4'}
          username="enzoborgfrantz"
          location="Berlin"
        />
        <UserResult
          lastResult
          avatar={'https://avatars2.githubusercontent.com/u/8377900?v=4'}
          username="enzoborgfrantz"
          location="Berlin"
        />
      </div>
    )
    }
  </UserResultContainer>
);

const mapState = state => state.userResults;
const mapDispatch = dispatch => ({
  // asyncAction: () => dispatch({ type: 'ASYNC_ACTION' }),
});

export default connect(mapState, mapDispatch)(UserResults);
