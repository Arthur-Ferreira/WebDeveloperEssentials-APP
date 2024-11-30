import styled, { css } from "styled-components";
import { breakpoints, colors, spacing } from "../../../global/vars";

const SNav = styled.nav<{ $mobile?: boolean }>`
    display: none;
    
    @media (min-width: ${breakpoints.tablet}) {
      display: block;
      }
      
      ${props =>
        props.$mobile && css`    
        display: block;
        height: 20rem;
        width: 90%;
        margin: ${spacing.space4} auto;
        font-size: 1.75rem;
        color: ${colors.primary100};
    `};
`;

export default SNav