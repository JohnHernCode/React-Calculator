import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => (
  <div className="display">
    {props}
  </div>
);
Display.propType = {
  props: PropTypes.string,
};

Display.defaultProps = {
  props: '0',
};

export default Display;
