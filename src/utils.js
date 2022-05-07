export const calculateFibonacciResultByNTerm = ({
  nTerm
}) => {
  let result = 0;
  let currentNumber = 1;
  let auxNumber = 1;

  for (let index = 0; index < nTerm; index++) { 
    auxNumber = currentNumber;
    currentNumber = result;
    result = currentNumber + auxNumber;
  }

  return result;
};
