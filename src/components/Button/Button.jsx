import React from 'react';
import './Button.css';

export default function Button({ children, fullWidth, ...buttonProps }) {
  return (
    <button
      className={`Button ${fullWidth ? 'full-width' : ''}`}
      {...buttonProps}>
      {children}
    </button>
  );
}
