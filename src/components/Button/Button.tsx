import React from "react";
import { ButtonWrapper } from "./element";

interface Props {
  children: string;
  type: "button" | "submit";
  secondary: boolean;
}

const Button = ({
  children,
  secondary = false,
  type = "button",
  ...props
}: Props) => {
  return (
    <ButtonWrapper type={type} {...props}>
      <span>{children}</span>
    </ButtonWrapper>
  );
};

export default Button;
