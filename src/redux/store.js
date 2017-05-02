import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import reduxLogger from 'redux-logger';

import { postsReducer, weeksReducer } from './reducer';

export default createStore(
  combineReducers({
    posts: postsReducer,
    weeks: weeksReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    reduxLogger,
    thunk
  )
);

