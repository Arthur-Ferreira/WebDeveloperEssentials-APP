import NavItems from "./styles";
import Badge from "../../atoms/Badge";
import Anchor from "../../atoms/Anchor";


const Navigation: React.FC = () => {
  return (
    <>
      <NavItems>
        <li><Anchor to="/">Shop</Anchor></li>
        <li>
          <Anchor to="/cart">
            Cart
            <Badge>1</Badge>
          </Anchor>
        </li>
        <li><Anchor to="/orders">Orders</Anchor></li>
        {/* <li><Anchor to="/admin/products">Manage Products</Anchor></li>
        <li><Anchor to="/admin/orders">Manage Orders</Anchor></li> */}
        <li><Anchor to="/signup">Signup</Anchor></li>
        <li><Anchor to="/login">Login</Anchor></li>
        {/* <li>
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