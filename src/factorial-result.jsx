import React from 'react';

const factorial = require('./factorial');


const FactorialResult = (props) => {
  try {
    if (props.integer === undefined) throw new Error("argument wasn't passed");
    else if (props.integer < 0) throw new Error("the argument can't be negative");
    else if (props.integer > 40) throw new Error('the argument is too big');
    else {
      const newResult = factorial(props.integer);
      return (
        <p className="result">
          Result:
          {newResult}
          .
        </p>
      );
    }
  } catch (e) {
    return (
      <p className="result">
        Error:
        {e.message}
        !
      </p>
    );
  }
};

export default FactorialResult;
