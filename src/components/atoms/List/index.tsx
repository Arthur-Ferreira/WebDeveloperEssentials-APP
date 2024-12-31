import React from "react";
import SUList from "./styles";

const List = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return <SUList>{children}</SUList>;
}


export default List;