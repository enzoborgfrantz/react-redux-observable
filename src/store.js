import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { reducer as userResultsReducer, searchUserEpic } from './ducks/userResults.duck';
import { reducer as searchInputReducer, searchInputChangeEpic, fetchSuggestionsEpic } from './ducks/searchInput.duck';

const epics = [
  searchUserEpic,
  searchInputChangeEpic,
  fetchSuggestionsEpic,
];

const epicMiddleware = createEpicMiddleware(combineEpics(...epics));

const reducer = combineReducers({
  userResults: userResultsReducer,
  searchInput: searchInputReducer,
});

const store = createStore(reducer, applyMiddleware(epicMiddleware));

export default store;
