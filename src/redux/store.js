import { createStore, applyMiddleware, combineReducers } from 'redux';

import reduxLogger from 'redux-logger';

import { postsReducer, weeksReducer } from './reducer';

export default createStore(
  combineReducers({
    posts: postsReducer,
    weeks: weeksReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    reduxLogger
  )
);

