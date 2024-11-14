import Navigation from "../../molecules/Navigation";
import { AsideMenu, MainHeader, MobileMenuBtn } from "./styles";
import Nav from "../../atoms/Nav";
import Anchor from "../../atoms/Anchor";


const AppHeader: React.FC = () => {
  return (
    <>
      <MainHeader>
        <div id="logo"><Anchor to="/">WDE</Anchor></div>
        <Nav>
          <Navigation />
        </Nav>
        <MobileMenuBtn>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuBtn>
      </MainHeader>
      <AsideMenu>
        <Nav $mobile>
          <Navigation />
        </Nav>
      </AsideMenu>
    </>
  );
}


export default AppHeader
