import React from 'react';
import PropTypes from 'prop-types';

const Message = ({
  message
}) => (
  <h2 style={{ color: 'red' }}>
    { message }
  </h2>
);

Message.propTypes = {
  message: PropTypes.string
};

export default Message
