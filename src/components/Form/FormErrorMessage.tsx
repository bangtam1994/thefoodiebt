import React from "react";

interface Props {
  isVisible: boolean;
  message: string;
}

const ErrorMessage = ({ isVisible, message }: Props) =>
  isVisible ? <div className="errorMessage">{message}</div> : null;

export default ErrorMessage;
