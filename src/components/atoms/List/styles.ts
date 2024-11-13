import styled from "styled-components";
import { spacing } from "../../../global/vars";

const SUList = styled.ul`
  margin: ${spacing.space8} auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: ${spacing.space4};
`;


export default SUList