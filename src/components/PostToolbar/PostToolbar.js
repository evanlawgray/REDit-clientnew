import React from 'react';
import PropTypes from 'prop-types';

import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

const toolbarStyles = {
  marginLeft: '256px',
  color: '#8B8B8B'
};

const PostToolbar = ({ sortByDate, sortByPopularity }) => (
  <Toolbar style={toolbarStyles}>
    <ToolbarTitle text="Posts" />
    <div>
      <ToolbarTitle text="Sort:" />
      <FlatButton
        label="Newest"
        onTouchTap={() => sortByDate()}
      />
      <FlatButton
        label="Popular"
        onTouchTap={() => sortByPopularity()}
      />
    </div>
  </Toolbar>
);

PostToolbar.propTypes = {
  sortByDate: PropTypes.func.isRequired,
  sortByPopularity: PropTypes.func.isRequired
};

export default PostToolbar;
