import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';

import Categories from './Categories';

class CategoriesContainer extends Component {

  render() {
    return (
      <Drawer>
        <AppBar
          title="RED it"
          iconElementLeft={<IconButton><SiteIcon /></IconButton>}
        />
        <Categories
          weeks={this.props.weeks}
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
  weeks: PropTypes.obj
};

export default connect(mapStateToProps)(CategoriesContainer);
