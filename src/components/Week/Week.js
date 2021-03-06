import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MenuItem from 'material-ui/MenuItem';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

function generateLessonsList(lessons, getPosts) {
  return lessons.map((lesson, i) => (
        <Link
          key={`linkto${lesson.id}`}
          to={`/lessons/${lesson.id}/posts`}
        >
          <MenuItem
            key={lesson.id}
            primaryText={lesson.title}
          />
        </Link>
  ));
}

const Week = ({ title, lessons, getPosts }) => (
  <List>
    <Subheader>{title}</Subheader>
    <Divider />
    {generateLessonsList(lessons, getPosts)}
  </List>
);

Week.propTyes = {
  title: PropTypes.string,
  categories: PropTypes.array
};

export default Week;
