import React from 'react';
import './button.css';

const Button = ({
  label = 'Button',
  size = 'default',
  type = 'solid',
  color = 'primary',
  iconLeft,
  iconRight,
  disabled = false,
  onClick
}) => {
  const buttonClasses = `button ${size} ${type} ${color} ${disabled ? 'disabled' : ''}`;
  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {iconLeft && <span className="icon-left">{iconLeft}</span>}
      {label && <span className="label">{label}</span>}
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </button>
  );
};

export default Button;
