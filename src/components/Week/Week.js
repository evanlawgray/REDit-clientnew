import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from 'material-ui/MenuItem';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

function generateCategoriesList(categories) {
  const categoriesList = categories.map((category, i) => (
    <MenuItem
      key={category+i}
      primaryText={category}
    />
  ));

  return categoriesList;
}

const Week = ({ title, categories }) => (
  <List>
    <Subheader>{title}</Subheader>
    <Divider />
    {generateCategoriesList(categories)}
  </List>
);

Week.propTyes = {
  title: PropTypes.string,
  categories: PropTypes.array
};

export default Week;
