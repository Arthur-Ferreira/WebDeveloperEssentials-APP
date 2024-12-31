import React from "react";
import SInput from "./styles";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  $full?: boolean;
}

const Input = ({ $full, ...props }: IInputProps): JSX.Element => {
  return <SInput $full={$full} {...props} />
}

export default Input