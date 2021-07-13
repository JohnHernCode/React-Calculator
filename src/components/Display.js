import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Display.module.css';

const Display = ({ calc }) => (
  <div className={styles.display}>
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
