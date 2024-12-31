import styled, { css } from "styled-components";
import { spacing, colors } from "../../../global/vars";

const SButton = styled.button<{ $alt?: boolean }>`
  cursor: pointer;
  font: inherit;
  padding: ${spacing.space2} ${spacing.space6};
  background-color: ${colors.primary500};
  color: ${colors.primary500Contrast};
  border: 1px solid ${colors.primary500};
  border-radius: ${spacing.borderRadiusSmall};
  
  &:hover,
  &:active {
    background-color: ${colors.primary700};
    border-color: ${colors.primary700};
    }
    
    ${props =>
    props.$alt && css`
    background-color: transparent;
    color: ${colors.primary500};
    
    &:hover,
    &:active {
      background-color: ${colors.primary50};
      }
    `};
`;


export default SButton