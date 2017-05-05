import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

const chipStyles = {
  margin: "0 3px"
}

function generateCategoriesChips( categories ) {
 return categories.map(( category, i ) => (
    <Chip
      key={category + i + Date.now()}
      style={chipStyles}
    >{category}</Chip>
  ));
}

const Post = ({ post, updateVote }) => {
  return (
    <Card className={styles.post}>
      <a className={styles.postLink} href={post.link}>{post.title}</a>
      <p className={styles.postDescription}>{post.description}</p>
      <div className={styles.voteButton}>
        <FlatButton label={`Vote ${post.votes}`}
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
      </div>
      <div className={styles.categoriesChips}>
        {generateCategoriesChips( post.tags )}
      </div>
    </Card>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.num,
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
