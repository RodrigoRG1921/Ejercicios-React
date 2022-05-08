import React from 'react';
import PropTypes from 'prop-types';

const ButtonBase = ({
  text,
  handleOnClick
}) => (
  <button onClick={ handleOnClick }>
    { text }
  </button>
);

ButtonBase.propTypes = {
  text: PropTypes.string,
  handleOnClick: PropTypes.func
};

export default ButtonBase;
