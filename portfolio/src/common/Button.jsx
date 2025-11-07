import React from 'react';
import './Button.css';

const Button = (props) => {
  const buttonClasses = `button ${props.className || ''}`.trim();

  return (
    <button className={buttonClasses}>
      {props.title}
    </button>
  );
};

export default Button;
