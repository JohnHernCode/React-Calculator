import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Buttons.module.css';

const Button = (props) => {
  const {
    buttonName, wide, color, clickHandler,
  } = props;
  return (
    <button
      type="button"
      className={wide ? styles.wide : styles.normal}
      style={{ backgroundColor: color }}
      onClick={() => clickHandler(buttonName)}
    >
      {buttonName}
    </button>
  );
};
Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: '#fe9241',
  wide: false,
};

export default Button;
