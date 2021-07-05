import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ calc }) => (
  <div>
    {calc}
  </div>
);

Display.defaultProps = {
  calc: '0',
};

Display.propTypes = {
  calc: PropTypes.string,
};

export default Display;
