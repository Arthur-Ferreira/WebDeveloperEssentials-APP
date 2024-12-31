import React from "react";
import SLabel from "./styles";

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

const Label = ({ children, ...props }: ILabelProps): JSX.Element => {
  return <SLabel {...props}>{children}</SLabel>
}

export default Label