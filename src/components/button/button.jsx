import React from 'react';
import './button.css';

const Button = ({
  label = 'Button',
  toggleLabel = true,
  size = 'default',
  type = 'solid',
  color = 'primary',
  iconLeft,
  iconRight,
  toggleLeftIcon = false,
  toggleRightIcon = false,
  disabled = false,
  onClick
}) => {
  const buttonClasses = `button ${size} ${type} ${color} ${disabled ? 'disabled' : ''}`;
  const iconSize = size === 'xlarge' || size === 'large' ? 24 : size === 'default' || size === 'small' ? 16 : 12;

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {toggleLeftIcon && iconLeft && (
        <span className="icon-left" style={{ display: 'inline-flex' }}>
          {React.cloneElement(iconLeft, { size: iconSize })}
        </span>
      )}
      {toggleLabel && label && <span className="label">{label}</span>}
      {toggleRightIcon && iconRight && (
        <span className="icon-right" style={{ display: 'inline-flex' }}>
          {React.cloneElement(iconRight, { size: iconSize })}
        </span>
      )}
    </button>
  );
};

export default Button;