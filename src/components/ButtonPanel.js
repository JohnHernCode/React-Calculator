import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from '../styles/ButtonPanel.module.css';

const Gray = '#e0e0e0';

const ButtonPanel = ({ clickHandler }) => (
  <div>
    <div className={styles.group}>
      <Button key="AC" buttonName="AC" color={Gray} clickHandler={clickHandler} />
      <Button key="+/-" buttonName="+/-" color={Gray} clickHandler={clickHandler} />
      <Button key="%" buttonName="%" color={Gray} clickHandler={clickHandler} />
      <Button key="÷" buttonName="÷" clickHandler={clickHandler} />
    </div>
    <div className={styles.group}>
      <Button key="7" buttonName="7" color={Gray} clickHandler={clickHandler} />
      <Button key="8" buttonName="8" color={Gray} clickHandler={clickHandler} />
      <Button key="9" buttonName="9" color={Gray} clickHandler={clickHandler} />
      <Button key="X" buttonName="X" clickHandler={clickHandler} />
    </div>
    <div className={styles.group}>
      <Button key="4" buttonName="4" color={Gray} clickHandler={clickHandler} />
      <Button key="5" buttonName="5" color={Gray} clickHandler={clickHandler} />
      <Button key="6" buttonName="6" color={Gray} clickHandler={clickHandler} />
      <Button key="-" buttonName="-" clickHandler={clickHandler} />
    </div>
    <div className={styles.group}>
      <Button key="1" buttonName="1" color={Gray} clickHandler={clickHandler} />
      <Button key="2" buttonName="2" color={Gray} clickHandler={clickHandler} />
      <Button key="3" buttonName="3" color={Gray} clickHandler={clickHandler} />
      <Button key="+" buttonName="+" clickHandler={clickHandler} />
    </div>
    <div className={styles.group}>
      <Button key="0" buttonName="0" wide color={Gray} clickHandler={clickHandler} />
      <Button key="." buttonName="." color={Gray} clickHandler={clickHandler} />
      <Button key="=" buttonName="=" clickHandler={clickHandler} />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
