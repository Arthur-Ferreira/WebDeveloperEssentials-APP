import { Link } from "react-router-dom";
import "../../../less/navigation.less";

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
          {/* <!-- <%- include('nav-items') %> --> */}
        </nav>
        <button id="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <aside id="mobile-menu">
        <nav>
          {/* <!-- <%- include('nav-items') %> --> */}
        </nav>
      </aside>
    </>
  );
}


export default AppHeader
