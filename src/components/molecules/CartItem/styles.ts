import styled from "styled-components";
import { breakpoints, colors, spacing } from "../../../global/vars";

const SCartItem = styled.article`
    display: flex;
    flex-direction: column;
    background-color: ${colors.gray700};
    padding: ${spacing.space4};
    margin: ${spacing.space4} 0;
    border-radius: ${spacing.borderRadiusMedium};

    
    @media (min-width: ${breakpoints.tablet}) {
    .cart-item {
        flex-direction: row;
      justify-content: space-between;
    }
  }
`;

// .cart-product-price {
//     font-style: italic;
//     color: @color-gray-300;
// }


export { SCartItem }