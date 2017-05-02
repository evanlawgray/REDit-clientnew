import React from 'react';
import PropTypes from 'prop-types';

import Post from '../../components/Post';

import styles from './styles.css';

const PostList = ({ posts, updateVote }) => {
  return (
    <div className={styles.postList}>
      {
        posts.length < 0 &&
        <h3>Loading Posts...</h3>
      }
      {
        posts.length > 0 &&
        posts.map( post => (
          <Post
            key={post.id}
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

