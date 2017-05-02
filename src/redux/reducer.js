import {
  GET_WEEKS,
  GET_POSTS,
  UPVOTE_POST,
  SORT_BY_POPULARITY,
  SORT_BY_DATE
} from './actions';

const initialState = [];

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return [
        ...action.payload.posts
      ]
    case UPVOTE_POST:
      return [
        ...action.payload.posts
      ]
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

export function weeksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEEKS:
      return [
        ...action.payload.weeks
      ]
    default: return state;
  }
}
