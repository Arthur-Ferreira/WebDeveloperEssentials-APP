import React from "react";
import SLogo from "./styles";

interface ILogo {
  children: React.ReactNode;
}

const Logo = ({ children, ...props }: ILogo): JSX.Element => {
  return <SLogo {...props} >{children}</SLogo>
}


export default Logo;