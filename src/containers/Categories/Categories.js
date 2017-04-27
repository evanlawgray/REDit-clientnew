import React from 'react';
import PropTypes from 'prop-types';

import Week from '../../components/Week';

const Categories = ({ weeks }) => {
  return (
    <div>
      {weeks.map(week => (
        <Week
          key={week.id}
          title={week.title}
          categories={week.categories}
        />
      ))}
    </div>
  );
};

Categories.propTypes = {
  weeks: PropTypes.obj
};

export default Categories;
