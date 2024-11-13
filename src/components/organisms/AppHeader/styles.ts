import styled from "styled-components";
import { breakpoints, colors, spacing } from "../../../global/vars";

const MainHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 60rem;
  height: 5rem;
  margin: 0 auto;
  padding: 0 ${spacing.space6};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.primary500};
  background-color: ${colors.gray500};
  z-index: 2;

  @media (min-width: ${breakpoints.tablet}) {
    position: static;
  }
`;

const MobileMenuBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  width: 2.25rem;
  height: 2.25rem;
  background-color: transparent;
  padding: 0;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }

  span {
    width: 2.25rem;
    height: 0.2rem;
    background-color: ${colors.gray100};
  }
`;

const AsideMenu = styled.aside`
  position: fixed;
  top: 5rem;
  left: 0;
  height: calc(100vh - 5rem);
  width: 100%;
  background-color: ${colors.gray700};
  display: none;
  flex-direction: column;
  align-items: center;

  &.open {
    display: flex;
    z-index: 2;

    @media (min-width: ${breakpoints.tablet}) {
      display: none;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }

  a,
  button {
    font-size: 1.75rem;
    color: ${colors.primary100};
  }
`;


export { MainHeader, MobileMenuBtn, AsideMenu }