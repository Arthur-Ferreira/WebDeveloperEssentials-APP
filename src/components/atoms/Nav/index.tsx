import React from "react";
import SNav from "./styles";

const Nav = ({ children, $mobile }: { children: React.ReactNode, $mobile?: boolean }) => {
    return (
        <SNav $mobile={$mobile}>{children}</SNav>
    );
}


export default Nav
