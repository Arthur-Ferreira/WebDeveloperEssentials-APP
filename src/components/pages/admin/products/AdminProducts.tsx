import { Link } from "react-router-dom";

// <%- include('../../shared/includes/head', { pageTitle: 'All Products' }) %>
{/* <script src="/scripts/product-management.js" defer></script> */ }
const AdminProducts: React.FC = () => {
  return (
    <main>
      <h1>Product Administration</h1>
      <section>
        <h2>Manage Products</h2>
        <p>
          <Link to="/admin/products/new" className="btn">Add Product</Link>
        </p>
      </section>
      <section>
        <ul id="products-grid">
          {/* <% for (const product of products) { %> */}
          <li>
            {/* <%- include('../../shared/includes/product-item', { product: product }) %> */}
          </li>
          {/* <% } %> */}
        </ul>
      </section>
    </main>

  );
}


export default AdminProducts