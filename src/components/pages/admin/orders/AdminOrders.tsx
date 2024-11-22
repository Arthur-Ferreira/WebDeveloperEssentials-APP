// <%- include('../../shared/includes/head', { pageTitle: 'All Orders' }) %>
{/* <script src="/scripts/order-management.js" defer></script> */ }

const AdminOrders: React.FC = () => {
  return (
    <main>
      <h1>Order Administration</h1>
      <ol>
        {/* <% for (const order of orders) { %> */}
        <li>
          {/* <%- include('order-item', { order: order }) %> */}

        </li>
        {/* <% } %> */}
      </ol>
    </main>

  );
}


export default AdminOrders