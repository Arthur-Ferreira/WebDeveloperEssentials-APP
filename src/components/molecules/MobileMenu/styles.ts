import styled from "styled-components";
import { breakpoints, colors } from "../../../global/vars";

const SMobileMenu = styled.aside`
  position: fixed;
  top: 5rem;
  left: 0;
  height: calc(100vh - 5rem);
  width: 100%;
  background-color: ${colors.gray700};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }

  a,
  button {
    font-size: 1.75rem;
    color: ${colors.primary100};
  }
`;

export default SMobileMenu