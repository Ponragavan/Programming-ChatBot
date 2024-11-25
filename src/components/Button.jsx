import React from 'react';

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`h-10 w-auto px-5 bg-cyan-500 text-white rounded-lg flex justify-center items-center ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
