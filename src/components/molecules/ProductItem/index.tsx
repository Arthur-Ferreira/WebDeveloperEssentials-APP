import { ObjectId } from "mongodb";
import Anchor from "../../atoms/Anchor";
// import Button from "../../atoms/Button";
import { H3 } from "../../atoms/Typography";
import { SProductItem, ProductItemContent, ProductItemActions } from "./styles";

type IProduct = {
  product: {
    title: string,
    imagePath: string,
    id: ObjectId | { $oid: string }
  }
}


const ProductItem: React.FC<IProduct> = ({ product }) => {
  return (
    <SProductItem>
      <img src={product.imagePath} alt={product.title} />
      <ProductItemContent>
        <H3>{product.title}</H3>
        <ProductItemActions>
          {/* <% if (locals.isAdmin) { %> */}
          {/* <Anchor to={`/admin/products/${product.id}`} $border>View & Edit</Anchor>
          <Button data-productid={product.id} data-csrf="<%= locals.csrfToken %>">Delete</Button> */}
          {/* id } else { %> */}
          <Anchor to={`/products/${product.id}`} $border>View Details</Anchor>
          {/* <% } %> */}
        </ProductItemActions>
      </ProductItemContent>
    </SProductItem>
  );
}


export default ProductItem