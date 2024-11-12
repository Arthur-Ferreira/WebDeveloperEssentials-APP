// import "../../../less/navigation.less"

import { Link } from "react-router-dom";
import NavItems from "./styles";
import Badge from "../../atoms/Badge";


const Navigation: React.FC = () => {
  return (
    <>
      <NavItems>
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/cart">Cart <Badge>Teste</Badge></Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/admin/products">Manage Products</Link></li>
        <li><Link to="/admin/orders">Manage Orders</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li>
          <form action="/logout" method="POST">
            {/* <input type="hidden" name="_csrf" value="<%= locals.csrfToken %>" /> */}
              <button>Logout</button>
          </form>
        </li>
      </NavItems>
    </>
  );
}


export default Navigation