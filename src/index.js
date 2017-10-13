import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { Provider } from 'react-redux';
import App from './components/App';
import { helloReducer, helloEpic, asyncActionEpic } from './modules/hello.module';

const epicMiddleware = createEpicMiddleware(combineEpics(helloEpic, asyncActionEpic));

const store = createStore(helloReducer, applyMiddleware(epicMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
