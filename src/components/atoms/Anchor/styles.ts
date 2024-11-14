import styled, { css } from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";
import { colors, spacing } from "../../../global/vars";

const SLink = styled(Button).attrs({ as: Link }) <{ $border?: boolean }>`

  padding: ${spacing.space2} ${spacing.space4};

  @media (min-width: 48rem) {
    border-radius: ${spacing.borderRadiusSmall};
  }

  &:hover,
  &:active {
    background-color: ${colors.primary500Bg};
  }

  ${props =>
    props.$border && css`
      border: 1px solid ${colors.primary500};
  `};
`;


export default SLink