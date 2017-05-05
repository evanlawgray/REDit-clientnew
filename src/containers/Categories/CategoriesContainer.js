import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';

import Categories from './Categories';

import { getPosts, getWeeks } from '../../redux/actions';

class CategoriesContainer extends Component {
  constructor() {
    super();

    this.getPostsByLesson = this.getPostsByLesson.bind(this);
  }

  getPostsByLesson(lessonId) {
    this.props.dispatch(getPosts(lessonId));
  }

  componentDidMount() {
    this.props.dispatch(getWeeks());
  }

  render() {
    return (
      <Drawer>
        <AppBar
          title="RED it"
          iconElementLeft={<IconButton><SiteIcon /></IconButton>}
        />
        <Categories
          weeks={this.props.weeks}
          getPosts={this.getPostsByLesson}
        />
      </Drawer>
    );
  }
}

function mapStateToProps(state) {
  return {
    weeks: state.weeks
  };
}

CategoriesContainer.propTypes = {
  weeks: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(CategoriesContainer);
