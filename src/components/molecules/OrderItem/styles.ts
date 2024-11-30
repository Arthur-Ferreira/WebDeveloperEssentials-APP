import styled from "styled-components";
import { breakpoints, colors, spacing } from "../../../global/vars";

const SOrderItem = styled.article`
  background-color: ${colors.gray400};
  border-radius: ${spacing.borderRadiusSmall};
  padding: 0 ${spacing.space4} ${spacing.space4};
  margin: ${spacing.space4} 0;
`;

const SOrderSummary = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing.space4};
  margin-bottom: ${spacing.space2};

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const SDetailsList = styled.ul`
margin-left: ${spacing.space8};

  li {
    list-style: square;
    margin-bottom: ${spacing.space2};
  }
`;

const SOrderItemPrice  = styled.span`
  color: ${colors.primary500};
`;

export {
  SOrderItem,
  SOrderSummary,
  SDetailsList,
  SOrderItemPrice
}