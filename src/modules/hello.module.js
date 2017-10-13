import { Observable } from 'rxjs';

const UPDATE_TITLE = 'UPDATE_TITLE';
const RESET_TITLE = 'RESET_TITLE';
const ASYNC_ACTION = 'ASYNC_ACTION';
const ASYNC_ACTION_COMPLETED = 'ASYNC_ACTION_COMPLETED';

const initialState = {
  hello: 'world',
};

export const helloReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case UPDATE_TITLE:
      return { ...state, hello: 'welt' };
    case RESET_TITLE:
      return { ...state, hello: 'world' };
    case ASYNC_ACTION_COMPLETED:
      return { ...state, bio: action.payload.bio };
    default: return state;
  }
};

export const asyncActionEpic = action$ => action$
  .ofType(ASYNC_ACTION)
  .switchMap(() =>
    Observable.ajax.getJSON('https://api.github.com/users/enzoborgfrantz')
      .map(payload => ({ type: ASYNC_ACTION_COMPLETED, payload }),
    ));

export const helloEpic = action$ => action$
  .ofType(UPDATE_TITLE)
  .switchMap(() =>
    Observable.of({ type: RESET_TITLE }).delay(750));
