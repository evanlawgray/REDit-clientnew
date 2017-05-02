import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

import Week from '../../components/Week';

const Categories = ({ weeks }) => {
  return (
    <ul className={styles.weeksList}>
      {
        weeks.length < 0 &&
        <h3>Loading Weeks...</h3>
      }
      {
        weeks.length > 0 &&
        weeks.map(week => (
          <Week
            key={week.id}
            title={week.title}
            categories={week.categories}
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
