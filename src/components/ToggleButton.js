import React from 'react';
import PropTypes from 'prop-types';

import './toggleButton.css';

const ToggleButton = ({handleClick, buttonTitle, buttonActive}) => {
  return (
    <button onClick={handleClick} className={buttonActive? "toggleButton active": "toggleButton"}>
      {buttonTitle}
    </button>
  );
}

ToggleButton.propTypes = {
  handleClick: PropTypes.func,
  buttonTitle: PropTypes.string,
  buttonActive: PropTypes.bool
}

export default ToggleButton;