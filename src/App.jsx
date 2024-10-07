// DifferentScreen.js

import React from 'react';
import Button from './components/button/button'; // Adjust the path as per your project structure

const DifferentScreen = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Welcome to the Different Screen</h1>
      {/* Using the Button component with a specific type */}
      <Button
        label="Primary Button"
        type="solid" // You can change this to 'outline' or 'text-only' as per your need
        color="primary" // Set the color to 'primary', 'grey', 'success', 'danger', or 'warning'
        size="large" // Set the size to 'xlarge', 'large', 'default', 'small', or 'xsmall'
        iconLeft="👈"
        iconRight="👉"
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default DifferentScreen;


