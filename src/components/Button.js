import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    buttonName, clickHandler,
  } = props;
  return (
    <button
      type="button"
      onClick={() => clickHandler(buttonName)}
    >
      {buttonName}
    </button>
  );
};
Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
};

export default Button;
