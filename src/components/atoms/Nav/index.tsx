import React from "react";
import SNav from "./styles";

const Nav = ({ children, $desktop }: { children: React.ReactNode, $desktop?: boolean }) => {
    return (
        <SNav $desktop={$desktop}>{children}</SNav>
    );
}


export default Nav
