import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from 'material-ui/MenuItem';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

function generateLessonsList(lessons) {
  return lessons.map((lesson, i) => (
    <MenuItem
      key={lesson+i}
      primaryText={lesson.title}
    />
  ));
}

const Week = ({ title, lessons }) => (
  <List>
    <Subheader>{title}</Subheader>
    <Divider />
    {generateLessonsList(lessons)}
  </List>
);

Week.propTyes = {
  title: PropTypes.string,
  categories: PropTypes.array
};

export default Week;
