import React from "react";
import SBadge from "./styles";

const Badge = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <SBadge>{children}</SBadge>;
}


export default Badge;