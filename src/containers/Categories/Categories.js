import React from 'react';
import PropTypes from 'prop-types';


import Week from '../../components/Week';

const Categories = ({ weeks, getPosts }) => {
  return (
    <ul>
      {
        weeks.length < 0 &&
        <h3>Loading Weeks...</h3>
      }
      {
        weeks.length > 0 &&
        weeks.map(week => (
          <Week
            key={week.week + Date.now()}
            title={week.week}
            lessons={week.lessons}
            getPosts={getPosts}
          />
        ))
      }
    </ul>
  );
};

Categories.propTypes = {
  weeks: PropTypes.arrayOf(PropTypes.object)
};

export default Categories;

