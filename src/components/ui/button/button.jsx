import React from "react";
import "./button.css";

export const Button = ({
  children,
  variant,
  type,
  className,
  id,
  startIcon,
  endIcon,
}) => {
  return (
    <button id={id} type={type} className={className + " btn " + variant}>
      {startIcon ? <span>{startIcon}</span> : ""}
      <span>{children}</span>
      {endIcon ? <span>{endIcon}</span> : ""}
    </button>
  );
};
