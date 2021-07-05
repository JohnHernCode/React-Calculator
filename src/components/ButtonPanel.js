import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div>
    <div>
      <Button key="AC" buttonName="AC" clickHandler={clickHandler} />
      <Button key="+/-" buttonName="+/-" clickHandler={clickHandler} />
      <Button key="%" buttonName="%" clickHandler={clickHandler} />
      <Button key="÷" buttonName="÷" clickHandler={clickHandler} />
    </div>
    <div>
      <Button key="7" buttonName="7" clickHandler={clickHandler} />
      <Button key="8" buttonName="8" clickHandler={clickHandler} />
      <Button key="9" buttonName="9" clickHandler={clickHandler} />
      <Button key="X" buttonName="X" clickHandler={clickHandler} />
    </div>
    <div>
      <Button key="4" buttonName="4" clickHandler={clickHandler} />
      <Button key="5" buttonName="5" clickHandler={clickHandler} />
      <Button key="6" buttonName="6" clickHandler={clickHandler} />
      <Button key="-" buttonName="-" clickHandler={clickHandler} />
    </div>
    <div>
      <Button key="1" buttonName="1" clickHandler={clickHandler} />
      <Button key="2" buttonName="2" clickHandler={clickHandler} />
      <Button key="3" buttonName="3" clickHandler={clickHandler} />
      <Button key="+" buttonName="+" clickHandler={clickHandler} />
    </div>
    <div>
      <Button key="0" buttonName="0" clickHandler={clickHandler} />
      <Button key="." buttonName="." clickHandler={clickHandler} />
      <Button key="=" buttonName="=" clickHandler={clickHandler} />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
