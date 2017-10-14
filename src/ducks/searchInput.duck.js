import { Observable } from 'rxjs';

// action types
export const SEARCH_USER = 'SEARCH_USER';
export const SEARCH_USER_INPUT_CHANGE = 'SEARCH_USER_INPUT_CHANGE';
export const SELECT_SUGGESTION = 'SELECT_SUGGESTION';
export const FETCH_SUGGESTIONS = 'FETCH_SUGGESTIONS';
export const FETCH_SUGGESTIONS_SUCCESS = 'FETCH_SUGGESTIONS_SUCCESS';
export const FETCH_SUGGESTIONS_FAILED = 'FETCH_SUGGESTIONS_FAILED';

// action creators
export const searchUser = username => ({
  type: SEARCH_USER,
  payload: username,
});

export const searchUserInputChange = username => ({
  type: SEARCH_USER_INPUT_CHANGE,
  payload: username,
});

export const fetchSuggestions = search => ({
  type: FETCH_SUGGESTIONS,
  payload: search,
});

const fetchSuggestionsSuccess = suggestions => ({
  type: FETCH_SUGGESTIONS_SUCCESS,
  payload: suggestions,
});

const fetchSuggestionsFailed = () => ({
  type: FETCH_SUGGESTIONS_FAILED,
});

const initialState = {
  currentSearch: '',
  loading: false,
  suggestions: [],
};

// reducer
export const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SEARCH_USER:
      return { ...state, currentSearch: action.payload };
    case SEARCH_USER_INPUT_CHANGE:
      return { ...state, currentSearch: action.payload };
    case FETCH_SUGGESTIONS:
      return { ...state, loading: true };
    case FETCH_SUGGESTIONS_SUCCESS:
      return { ...state, loading: false, suggestions: action.payload };
    case FETCH_SUGGESTIONS_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
};

// epics
export const searchInputChangeEpic = action$ => action$
  .ofType(SEARCH_USER_INPUT_CHANGE)
  .filter(({ payload }) => !!payload)
  .switchMap(({ payload }) => Observable.of(fetchSuggestions(payload)))
  .debounceTime(100);

export const fetchSuggestionsEpic = action$ => action$
  .ofType(FETCH_SUGGESTIONS)
  .switchMap(
    ({ payload }) => Observable.ajax.getJSON(`https://api.github.com/search/users?q=${payload}&type=users`)
    .map(({ items }) => items
      .slice(0, 10)
      .map(({ avatar_url, login }) => ({ avatar: avatar_url, username: login })),
    )
    .map(suggestions => fetchSuggestionsSuccess(suggestions))
    .catch(() => fetchSuggestionsFailed()),
  );
