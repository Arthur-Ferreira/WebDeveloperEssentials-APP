import Anchor from "../atoms/Anchor";

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
          {/* <Anchor to={`/admin/products/${product.id}`}>View & Edit</Anchor>
          <Anchor data-productid={product.id} data-csrf="<%= locals.csrfToken %>">Delete</Anchor> */}
          {/* id } else { %> */}
          <Anchor to={`/products/${product.id}`} $border>View Details</Anchor>
          {/* <% } %> */}
        </div>
      </div>
    </article>
  );
}


export default ProductItem