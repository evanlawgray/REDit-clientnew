import React from 'react';
import PropTypes from 'prop-types';

import Post from '../../components/Post';

import styles from './styles.css';

const PostList = ({ posts, updateVote }) => {
  return (
    <div className={styles.postList}>
      {
        posts.length <= 0 &&
        <p className={styles.noPostsMessage}>There are no posts for this lesson...</p>
      }
      {
        posts.length > 0 &&
        posts.map( post => (
          <Post
            key={post.post_id}
            post={post}
            updateVote={updateVote}
          />
        ))
      }
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  updateVote: PropTypes.func,
};

export default PostList;


