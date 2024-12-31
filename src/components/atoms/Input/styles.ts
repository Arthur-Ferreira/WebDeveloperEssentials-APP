import styled, { css } from "styled-components";
import { spacing } from "../../../global/vars";

const SInput = styled.input < { $full?: boolean }> `
  font: inherit;
  padding: ${spacing.space2};
  border-radius: ${spacing.borderRadiusSmall};
  border: none;
  margin-right: ${spacing.space1};
  
  ${props =>
    props.$full && css`
    margin-right: 0;
    width: 90%;
  `
  }
`;

export default SInput
