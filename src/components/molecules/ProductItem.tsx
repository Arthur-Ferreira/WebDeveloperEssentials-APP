import { Link } from "react-router-dom";
import Button from "../atoms/Button";

type IProduct = {
  product: {
    title: string,
    imageUrl: string,
    id: string
  }
}


const ProductItem: React.FC<IProduct> = ({ product }) => {
  return (
    <article className="product-item">
      <img src={product.imageUrl} alt={product.title} />
      <div className="product-item-content">
        <h2>{product.title}</h2>
        <div className="product-item-actions">
          {/* <% if (locals.isAdmin) { %> */}
          {/* <Button as={Link} $alt to={`/admin/products/${product.id}`}>View & Edit</Button>
          <Button $alt data-productid={product.id} data-csrf="<%= locals.csrfToken %>">Delete</Button> */}
          {/* id } else { %> */}
          <Button as={Link} $alt to={`/products/${product.id}`}>View Details</Button>
          {/* <% } %> */}
        </div>
      </div>
    </article>
  );
}


export default ProductItem