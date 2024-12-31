import styled from "styled-components";
import { breakpoints, spacing } from "../../../global/vars";

const NavItems = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: ${spacing.space2} ${spacing.space4};


  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
  
  li {
    margin: 0 ${spacing.space2};
  }
`;


export default NavItems