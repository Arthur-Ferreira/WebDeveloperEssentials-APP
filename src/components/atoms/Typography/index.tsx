import {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyH4,
    // P, Small 
}
    from "./styles"

export interface TypographyProps {
    children: React.ReactNode
}


const H1: React.FC<TypographyProps> = ({ children }) => {
    return <TypographyH1>{children}</TypographyH1>
}

const H2: React.FC<TypographyProps> = ({ children }) => {
    return <TypographyH2>{children}</TypographyH2>
}

const H3: React.FC<TypographyProps> = ({ children }) => {
    return <TypographyH3>{children}</TypographyH3>
}

const H4: React.FC<TypographyProps> = ({ children }) => {
    return <TypographyH4>{children}</TypographyH4>
}

export {
    H1,
    H2,
    H3,
    H4,
}