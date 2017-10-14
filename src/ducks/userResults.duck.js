import { Observable } from 'rxjs';

import { SEARCH_USER } from './searchInput.duck';

// action types
const SELECT_RESULT = 'SELECT_RESULT';
const RESULTS_FETCH = 'RESULTS_FETCH';
const RESULTS_FETCH_COMPLETED = 'RESULTS_FETCH_COMPLETED';
const RESULTS_FETCH_FAILED = 'RESULTS_FETCH_FAILED';

// action creators
export const selectResult = id => ({
  type: SELECT_RESULT,
  payload: id,
});

const fetchResults = () => ({
  type: RESULTS_FETCH,
});

const fetchResultsCompleted = results => ({
  type: RESULTS_FETCH_COMPLETED,
  payload: results,
});

const fetchResultsFailed = () => ({
  type: RESULTS_FETCH_FAILED,
});

// initial state
const initialState = {
  results: [],
  loading: false,
};

// reducer
export const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SEARCH_USER:
      console.log('search');
      return { ...state, loading: true };
    case RESULTS_FETCH:
      console.log('loading now');
      return { ...state, loading: true };
    case RESULTS_FETCH_COMPLETED:
      console.log('loading completed', action.payload);
      return { ...state, loading: false };
    default:
      return state;
  }
};

// epics
export const searchUserEpic = action$ => action$
  .ofType(SEARCH_USER)
  .switchMap(({ payload }) => Observable.of(fetchResults())
    .flatMap(() => Observable.ajax.getJSON(`https://api.github.com/search/users?q=${payload}&type=users`)
    .delay(3000)
    .map(result => fetchResultsCompleted(result))
    .catch(() => fetchResultsFailed())),
  );

// export const searchUserEpic = action$ => action$.ofType(SEARCH_USER)
//   .switchMap(({ payload }) =>
//     Observable.concat(
//       Observable.of(fetchResults()),
//       Observable.ajax.getJSON(`https://api.github.com/search/users?q=${payload}&type=users`)
//         .map(result => fetchResultsCompleted(result)),
//       ),
//     );

// epics

  // .map(result => fetchResultsCompleted(result)),
  // ));
// ),
//     Observable.concat(
//       Observable.of(fetchResults()),
//       Observable.ajax.getJSON(`https://api.github.com/search/users?q=${payload}&type=users`)
//         .map(result => fetchResultsCompleted(result)),
//       ),
//     );
//
// export const asyncActionEpic = action$ => action$
//   .ofType(ASYNC_ACTION)
//   .switchMap(() =>
//     Observable.ajax.getJSON('https://api.github.com/users/enzoborgfrantz')
//       .map(payload => ({ type: ASYNC_ACTION_COMPLETED, payload }),
//     ));
//
// export const helloEpic = action$ => action$
//   .ofType(UPDATE_TITLE)
//   .switchMap(() =>
//     Observable.of({ type: RESET_TITLE }).delay(750));
