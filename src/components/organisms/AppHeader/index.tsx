import Navigation from "../../molecules/Navigation";
import { MainHeader, MobileMenuBtn } from "./styles";
import Nav from "../../atoms/Nav";
import Anchor from "../../atoms/Anchor";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { open, close } from "../../../feature/mobileSlice";
import MobileMenu from "../../molecules/MobileMenu";
import Logo from "../../atoms/Logo";

const AppHeader: React.FC = () => {
  const dispatch = useAppDispatch()
  const currentHeaderState = useAppSelector(state => state.mobile.isOpen)

  const handleToggleMobileMenu = () => {
    currentHeaderState === false ? dispatch(open()) : dispatch(close())
  }

  return (
    <>
      <MainHeader>
        <Logo><Anchor to="/">WDE</Anchor></Logo>
        <Nav>
          <Navigation />
        </Nav>
        <MobileMenuBtn onClick={handleToggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuBtn>
      </MainHeader>
      <MobileMenu isOpen={currentHeaderState} />
    </>
  );
}


export default AppHeader
