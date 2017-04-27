export const UPVOTE_POST = 'upvotePost';

export const SORT_BY_POPULARITY = 'sortByPopularity';

export const SORT_BY_DATE = 'sortByDate';

export const upvotePost = post => ({ type: UPVOTE_POST, postId: post.id });

export const sortByPopularity = filterType => ({ type: SORT_BY_POPULARITY, filterType });

export const sortByDate = filterType => ({ type: SORT_BY_DATE, filterType });
