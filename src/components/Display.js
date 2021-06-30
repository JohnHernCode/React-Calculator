/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { calc } = props;
  return (
    <div className="display">
      {calc}
    </div>
  );
};

Display.propType = {
  calc: PropTypes.string,
};

Display.defaultProps = {
  calc: '0',
};

export default Display;
