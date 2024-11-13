import React from "react";
import SButton from "./styles";

interface IButton {
    children: React.ReactNode | string;
    $alt?: boolean;
    type?: "button" | "reset" | "submit";
    as?: any;
    to?: string;
}

const Button = ({ children, $alt, type, as, to }: IButton): JSX.Element => {
    return <SButton $alt={$alt} type={type} as={as} to={to}>{children}</SButton>
}


export default Button;