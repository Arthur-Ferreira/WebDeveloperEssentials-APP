import React from "react";
import SForm from "./styles";

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form = ({ children, ...props }: IFormProps): JSX.Element => {
  return <SForm {...props}>{children}</SForm>
}

export default Form