import { Link } from "react-router-dom";
import NavItems from "./styles";
// import Badge from "../../atoms/Badge";
import Button from "../../atoms/Button";


const Navigation: React.FC = () => {
  return (
    <>
      <NavItems>
        <li><Button as={Link} to="/">Shop</Button></li>
        <li>
          <Button as={Link} to="/cart">
            Cart
            {/* <Badge>Teste</Badge> */}
          </Button>
        </li>
        <li><Button as={Link} to="/orders">Orders</Button></li>
        {/* <li><Button as={Link} to="/admin/products">Manage Products</Button></li>
        <li><Button as={Link} to="/admin/orders">Manage Orders</Button></li>
        <li><Button as={Link} to="/signup">Signup</Button></li>
        <li><Button as={Link} to="/login">Login</Button></li>
        <li>
          <form action="/logout" method="POST">
            // <input type="hidden" name="_csrf" value="<%= locals.csrfToken %>" />
            <Button>Logout</Button>
          </form>
        </li> */}
      </NavItems>
    </>
  );
}


export default Navigation