import styled from "styled-components";
import { colors, spacing } from "../../../global/vars";

const SProductItem = styled.article`
  border-radius: ${spacing.borderRadiusMedium};
  text-align: center;
  background-color: ${colors.gray600};
  overflow: hidden;

  img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
  }
`;

const ProductItemContent = styled.div`
  padding: ${spacing.space4};

    h2 {
      font-size: 1.15rem;
      margin: ${spacing.space2} 0;
    }
  
`;

const ProductItemActions = styled.div`
    display: flex;
    gap: ${spacing.space2};
    margin-top: ${spacing.space4};
    justify-content: center;
`;

export { SProductItem, ProductItemContent, ProductItemActions }