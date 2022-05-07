import React, { useEffect, useState } from 'react';
import './App.css';

import Fibonacci from './components/fibonacci';
import { calculateFibonacciResultByNTerm } from './utils';

const App = () => {
  const [nTermFibonacci, setNTermFibonacci] = useState(1);

  useEffect(() => {
    const intervalReference = setInterval(() => {
      setNTermFibonacci(_nTermFibonacci => _nTermFibonacci + 1);
    }, 1000);

    return () => clearInterval(intervalReference);
  }, []);

  return (
    <>
      <Fibonacci fibonacciNumber={ calculateFibonacciResultByNTerm({ nTerm: nTermFibonacci }) }/>
    </>
  );
};

export default App;
