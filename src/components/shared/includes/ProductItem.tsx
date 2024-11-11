import { Link } from "react-router-dom";

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
          <Link className="btn btn-alt" to={`/admin/products/${product.id}`}>View & Edit</Link>
          <button className="btn btn-alt" data-productid={product.id} data-csrf="<%= locals.csrfToken %>">Delete</button>
          {/* id } else { %> */}
          <Link className="btn btn-alt" to={`/products/${product.id}`}>View Details</Link>
          {/* <% } %> */}
        </div>
      </div>
    </article>

  );
}


export default ProductItem