import styled from "styled-components";
import { colors, spacing } from "../../../global/vars";

const SForm = styled.form`
  max-width: 25rem;
  margin: ${spacing.space8} auto;
  padding: ${spacing.space4};
  background-color: ${colors.gray600};
  border-radius: ${spacing.borderRadiusMedium};
  text-align: center;
`;

export default SForm;