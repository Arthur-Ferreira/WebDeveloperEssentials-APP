import { Link } from "react-router-dom";
import Navigation from "../../molecules/Navigation";
import { AsideMenu, MainHeader, MobileMenuBtn } from "./styles";
import Button from "../../atoms/Button";
import Nav from "../../atoms/Nav";


const AppHeader: React.FC = () => {
  return (
    <>
      <MainHeader>
        <div id="logo"><Button as={Link} to="/">WDE</Button></div>
        <Nav $desktop>
          <ul>
            <li><Button as={Link} to="/products">Shop</Button></li>
            <li><Button as={Link} to="/cart">Cart</Button></li>
            <li><Button as={Link} to="/orders">Order</Button></li>
          </ul>
          <Navigation />
        </Nav>
        <MobileMenuBtn>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuBtn>
      </MainHeader>
      <AsideMenu>
        <Nav>
          <Navigation />
        </Nav>
      </AsideMenu>
    </>
  );
}


export default AppHeader
