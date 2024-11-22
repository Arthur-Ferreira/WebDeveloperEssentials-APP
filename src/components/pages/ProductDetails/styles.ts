import styled from "styled-components";
import { breakpoints, colors, spacing } from "../../../global/vars";

const ProductDetailsHeader = styled.header`
  margin-top: ${spacing.space8};
  padding: ${spacing.space8};
  background-color: ${colors.gray600};
  gap: ${spacing.space8};

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
`;

const ProductDetailsImage = styled.img`
  width: 100%;
  height: 6rem;
  object-fit: cover;
  border-radius: ${spacing.borderRadiusMedium};
  border: 1px solid ${colors.gray100};

  @media (min-width: ${breakpoints.tablet}) {
    width: 20rem;
    height: 15rem;
    transform: rotateZ(-10deg);
    margin: ${spacing.space8};
  }
`;

const ProductDetailsInfo = styled.div`
  text-align: center;
  
  @media (min-width: ${breakpoints.tablet}) {
    text-align: left;
  }
`;

const ProductDetailsDescription = styled.p`
  background-color: ${colors.primary500Bg};
  padding: ${spacing.space8};
  white-space: pre-wrap;
`;


export {
  ProductDetailsHeader,
  ProductDetailsImage,
  ProductDetailsInfo,
  ProductDetailsDescription
}