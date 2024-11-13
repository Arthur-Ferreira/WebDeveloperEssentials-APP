import SButton from "./styles";

interface IButton {
    children: JSX.Element | string;
    $alt?: boolean;
    type?: "button" | "reset" | "submit";
}

const Button = ({ children, $alt }: IButton): JSX.Element => {
    return <SButton $alt={$alt}>{children}</SButton>
}


export default Button;