import React from "react";
import "./input.css";

const Input = ({
  type = "text",
  id,
  className = "",
  placeholder = "",
  value,
  onChange,
  onFocus,
  onBlur,
  ...restProps // Capture any other input attributes
}) => {
  return (
    <input
      type={type}
      id={id}
      className={`input-field ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      {...restProps} // Spread any other input attributes
    />
  );
};

export default Input;
