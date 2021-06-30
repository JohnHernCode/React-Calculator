import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ calc }) => (
  <div>
    {calc}
  </div>
);

Display.propTypes = {
  calc: PropTypes.string,
};

Display.defaultProps = {
  calc: '0',
};

export default Display;
