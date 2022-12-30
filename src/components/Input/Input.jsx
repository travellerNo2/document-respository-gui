import React from 'react';
import './Input.css';

export default function Input({
  name,
  value,
  setValue,
  verticalLayout,
  inputProps,
  className = '',
}) {
  return (
    <label
      className={`Input ${
        verticalLayout ? '' : 'Input-horiztional'
      } ${className}`}>
      <span>{name}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...inputProps}
      />
    </label>
  );
}
