import React from 'react';
import PropTypes from 'prop-types';

const Room = ({
  roomNumber,
  fruit
}) => (
  <div>
    <h3>
      Room Number: { roomNumber + 1 }
    </h3>
    <h4>
      Fruit: { fruit }
    </h4>
  </div>
);

Room.propTypes = {
  roomNumber: PropTypes.number,
  fruit: PropTypes.string
};

export default Room;
