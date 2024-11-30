import styled from "styled-components";
import { colors, spacing } from "../../../global/vars";

const SBadge = styled.span`
  display: inline-block;
  margin-left: ${spacing.space2};
  padding: 0.15rem ${spacing.space4};
  border-radius: 10rem;
  background-color: ${colors.primary500};
  color: ${colors.primary500Contrast};
`;


export default SBadge