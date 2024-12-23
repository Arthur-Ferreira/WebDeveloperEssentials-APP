import { ObjectId } from "mongodb";
import Anchor from "../../atoms/Anchor";
import { H3 } from "../../atoms/Typography";
import { SProductItem, ProductItemContent, ProductItemActions } from "./styles";


type TProduct = {
  product: { 
    id: ObjectId | { $oid: string },
    imagePath: string,
    title: string
  }
}

const ProductItem = ({ product }: TProduct): JSX.Element => {
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