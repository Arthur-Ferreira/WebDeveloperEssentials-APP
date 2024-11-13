import styled, { css } from "styled-components";
import { breakpoints, spacing } from "../../../global/vars";

const SNav = styled.nav<{ $desktop?: boolean }>`
    display: none;

    @media (min-width: ${breakpoints.tablet}) {
      display: block;
    }
    
    ${props =>
        props.$desktop && css`    
        height: 20rem;
        width: 90%;
        margin: ${spacing.space4} auto;
    `};
`;

export default SNav