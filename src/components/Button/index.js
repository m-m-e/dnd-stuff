import React from 'react';

const Button = ({ text, type, handleClickFunction }) =>
  <button
    className={`button-${type}`}
    onClick={handleClickFunction}
  >
    {text}
  </button>


export default Button;