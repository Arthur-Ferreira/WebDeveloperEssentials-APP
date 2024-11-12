import styled from "styled-components";
import { breakpoints } from "../../../global/vars";

const NavItems = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;


export default NavItems