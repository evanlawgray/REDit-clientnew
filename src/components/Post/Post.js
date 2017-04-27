import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

function generateCategoriesChips(categories) {
  const newCategories = categories.map((category, i) => (
    <Chip key={category + i}>{category}</Chip>
  ));

  return newCategories;
}

const Post = ({ post, updateVote }) => {
  return (
    <Card className={styles.post}>
      <a className={styles.postLink} href={post.link}>{post.title}</a>
      <p className={styles.postDescription}>{post.description}</p>
      <FlatButton className={styles.voteButton} onTouchTap={() => updateVote(post)}>
        <svg
          className={styles.pointer}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path d="M9 6l-4 4h8z" />
        </svg>
        Vote {post.votes}
      </FlatButton>
      <div className={styles.categoriesChips}>
        {generateCategoriesChips(post.categories)}
      </div>
    </Card>
  );
};

Post.propTypes = {
  post: PropTypes.obj,
  updateVote: PropTypes.func.isRequired
};

export default Post;
