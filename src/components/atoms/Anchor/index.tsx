import React from "react";
import SLink from "./styles";
import { To } from "react-router-dom";

interface IAnchor {
  children: React.ReactNode | string;
  to: To;
}

const Anchor = ({ children, ...props }: IAnchor): JSX.Element => {
  return <SLink {...props} >{children}</SLink>
}


export default Anchor;