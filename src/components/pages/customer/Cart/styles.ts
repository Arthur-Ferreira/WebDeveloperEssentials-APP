import styled from "styled-components";
import { breakpoints, colors } from "../../../../global/vars";

const SCartTotal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${colors.primary500};
    }

    #cart-total-fallback {
        font-size: 1rem;
        font-weight: normal;
    }

    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export { SCartTotal }