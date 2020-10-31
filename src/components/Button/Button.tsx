import React from "react";
import "./Header.css";

interface Props {
  children: string;
  className: string;
  type: "button" | "submit";
  secondary: boolean;
}

const Button = ({
  children,
  className = "primary",
  secondary = false,
  type = "button",
  ...props
}: Props) => {
  return (
    <button className={className} type={type} {...props}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
