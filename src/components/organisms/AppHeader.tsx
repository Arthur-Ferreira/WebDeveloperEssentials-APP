import { Link } from "react-router-dom";
import Navigation from "../molecules/Navigation";


const AppHeader: React.FC = () => {
  return (
    <>

      <header id="main-header">
        <div id="logo"><Link to="/">WDE</Link></div>
        <nav>
          <ul>
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/orders">Order</Link></li>
          </ul>
          <Navigation />
        </nav>
        <button id="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <aside id="mobile-menu">
        <nav>
          <Navigation />
        </nav>
      </aside>
    </>
  );
}


export default AppHeader
