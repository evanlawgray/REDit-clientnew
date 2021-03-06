import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { getPosts, upvotePost, sortByPopularity, sortByDate } from '../../redux/actions';

import PostList from './PostList';
import PostToolBar from '../../components/PostToolbar';

class PostListContainer extends Component {
  constructor() {
    super();

    this.updateVote = this.updateVote.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.lessonid !== this.props.match.params.lessonid) {
      this.props.dispatch(getPosts(nextProps.match.params.lessonid));
    }
  }

  updateVote(upvotedPost) {
    if (upvotedPost) this.props.dispatch(upvotePost(upvotedPost));
  }

  sortByDate() {
    const filterType = 'date';
    this.props.dispatch(sortByDate(filterType));
  }

  sortByPopularity() {
    const filterType = 'popularity';
    this.props.dispatch(sortByPopularity(filterType));
  }

  render() {
    return (
      <div>
        <PostToolBar
          sortByDate={this.sortByDate}
          sortByPopularity={this.sortByPopularity}
        />
        <PostList
          posts={this.props.posts}
          updateVote={this.updateVote}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

PostListContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(PostListContainer);
