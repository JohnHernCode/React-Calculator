import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div>
    <div>
      <Button key="AC" name="AC" clickHandler={clickHandler} />
      <Button key="+/-" name="+/-" clickHandler={clickHandler} />
      <Button key="%" name="%" clickHandler={clickHandler} />
      <Button key="÷" name="÷" clickHandler={clickHandler} />
    </div>
    <div>
      <Button key="7" name="7" clickHandler={clickHandler} />
      <Button key="8" name="8" clickHandler={clickHandler} />
      <Button key="9" name="9" clickHandler={clickHandler} />
      <Button key="X" name="X" clickHandler={clickHandler} />
    </div>
    <div>
      <Button key="4" name="4" clickHandler={clickHandler} />
      <Button key="5" name="5" clickHandler={clickHandler} />
      <Button key="6" name="6" clickHandler={clickHandler} />
      <Button key="-" name="-" clickHandler={clickHandler} />
    </div>
    <div>
      <Button key="1" name="1" clickHandler={clickHandler} />
      <Button key="2" name="2" clickHandler={clickHandler} />
      <Button key="3" name="3" clickHandler={clickHandler} />
      <Button key="+" name="+" clickHandler={clickHandler} />
    </div>
    <div>
      <Button key="0" name="0" half clickHandler={clickHandler} />
      <Button key="." name="." clickHandler={clickHandler} />
      <Button key="=" name="=" clickHandler={clickHandler} />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
