import React from "react";
import SButton from "./styles";

interface IButton {
  children: React.ReactNode | string;
  $alt?: boolean;
  type?: "button" | "reset" | "submit";
}

const Button = ({ children, ...props }: IButton): JSX.Element => {
  return <SButton {...props} >{children}</SButton>
}


export default Button;