import React from 'react';

const Button = (props) => {
  const buttonClasses = `button ${props.className || ''}`.trim();

  return (
    <button className={buttonClasses}>
      {props.title}
    </button>
  );
};

export default Button;
