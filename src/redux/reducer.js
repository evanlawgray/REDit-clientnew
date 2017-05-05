import { data } from '../mock-data';

import {
  UPVOTE_POST,
  SORT_BY_POPULARITY,
  SORT_BY_DATE
} from './actions';

const initialState = data;

export function postsReducer(state = initialState.posts, action) {
  switch (action.type) {
    case UPVOTE_POST:
      return state.map((post) => {
        if (action.postId === post.id) post.votes++;
        return post;
      });
    case SORT_BY_POPULARITY:
      let newState = [].concat(state);
      return newState.sort((a, b) => {
        return b.votes - a.votes;
      });
    case SORT_BY_DATE:
      newState = [].concat(state);
      return newState.sort((a, b) => {
        return b.id - a.id;
      });
    default: return state;
  }
}

export function weeksReducer(state = initialState.weeks, action) {
  switch (action.type) {
    default: return state;
  }
}
