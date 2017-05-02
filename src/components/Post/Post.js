import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

function generateCategoriesChips( categories ) {
  const newCategories = categories.map(( category, i ) => (
    <Chip key={category.title + i}>{category.title}</Chip>
  ));

  return newCategories;
}

const Post = ({ post, updateVote }) => {
  return (
    <Card className={styles.post}>
      <a className={styles.postLink} href={post.link}>{post.title}</a>
      <p className={styles.postDescription}>{post.description}</p>
      <FlatButton label={`Vote ${post.votes}`}
                  className={styles.voteButton}
                  onTouchTap={() => updateVote(post)}>
        <svg
          className={styles.pointer}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path d="M9 6l-4 4h8z" />
        </svg>
      </FlatButton>
      <div className={styles.categoriesChips}>
        {generateCategoriesChips(post.lessons)}
      </div>
    </Card>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    votes: PropTypes.num,
    categories: PropTypes.arr,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
  }),
  updateVote: PropTypes.func.isRequired
};

export default Post;
