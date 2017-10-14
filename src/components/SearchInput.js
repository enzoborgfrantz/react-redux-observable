import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Input from './Input';
import { searchUser, searchUserInputChange } from '../ducks/searchInput.duck';
import { navyDark, navyLight, white } from '../styles/colors';
import Loader from './Loader';

const SuggestionsWrapper = styled.div`
  position: absolute;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: ${navyLight};
  border-radius: 4px;
  margin-top: 5px;
  border: none;
  display: flex;
  color: ${white};
  flex-direction: column;
  font-family: Raleway;
  width: 100%;
  overflow: hidden;
`;

const SuggestionWrapper = styled.div`
  width: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
  display: flex;

  &:hover {
    background-color: ${navyDark};
    cursor: pointer;
  }
`;

const Avatar = styled.div`
  background: url(${props => props.avatar});
  width: 25px;
  height: 25px;
  background-size: contain;
  border-radius: 5px;
  opacity: 0.65;
`;

const Text = styled.span`
  font-size: 18px;
  font-family: Raleway;
  color: ${white};
`;


const Suggestion = ({ avatar, username }) => (
  <SuggestionWrapper>
    <Avatar avatar={avatar} />
    <Text style={{ paddingLeft: '5px' }}>{username}</Text>
  </SuggestionWrapper>
);

const Suggestions = ({ children, ...props }) => (
  <SuggestionsWrapper {...props}>
    {children}
  </SuggestionsWrapper>
);

const SearchInputWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 1000;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
`

const SearchInput = ({ searchUserDispatch, searchUserInputChangeDispatch, suggestions, loading }) => (
  <SearchInputWrapper>
    <Input
      type="text"
      spellCheck="false"
      placeholder="Enter github username"
      onInput={searchUserInputChangeDispatch}
      onKeyUp={searchUserDispatch}
    />
    {(suggestions || loading) && (
      <Suggestions>
        {loading && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        {suggestions.map(suggestion => <Suggestion {...suggestion} />)}
      </Suggestions>
    )}
  </SearchInputWrapper>
);

const mapState = state => state.searchInput;

const mapDispatch = dispatch => ({
  searchUserDispatch: ({ keyCode, target }) => keyCode === 13 && dispatch(searchUser(target.value)),
  searchUserInputChangeDispatch: ({ target }) => dispatch(searchUserInputChange(target.value)),
});

export default connect(mapState, mapDispatch)(SearchInput);
