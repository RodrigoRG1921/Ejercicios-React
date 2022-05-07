import React from 'react';
import PropTypes from 'prop-types';

const Fibonacci = (props) => {
  return (
    <div>
      <h1>
        Result Fibonacci:
      </h1>
      <h2>
        { props.fibonacciNumber }
      </h2>
    </div>
  );
};

Fibonacci.propTypes = {
  fibonacciNumber: PropTypes.number.isRequired
};

export default Fibonacci;
