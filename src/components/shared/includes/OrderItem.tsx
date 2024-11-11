const OrderItem: React.FC = () => {
  return (
    <article className="order-item">
      <header className="order-summary">
        <h2>
          <span className="order-item-price">$
            {/* <%= order.productData.totalPrice.toFixed(2) %> */}
          </span>
          {/* - <%= order.formattedDate %> */}
        </h2>
        <p><span className="badge">
          {/* <%= order.status.toUpperCase() %> */}
        </span></p>
      </header>

      <section className="order-details">
        {/* <% if (locals.isAdmin) { %> */}
        <address>
          <p>
            <a href="mailto:<%= order.userData.email %>">
              {/* <%= order.userData.name %> */}
            </a>
          </p>
          <p>
            {/* <%= order.userData.address.street %> (<%= order.userData.address.postalCode %> <%= order.userData.address.city %>) */}
          </p>
        </address>
        {/* <% } %> */}
        <ul>
          {/* <% for (const item of order.productData.items) { %> */}
          <li>
            {/* <%= item.product.title %> - $<%= item.totalPrice.toFixed(2) %> ($<%= item.product.price.toFixed(2) %> x <%= item.quantity %>) */}
          </li>
          {/* <% } %> */}
        </ul>
      </section>

      {/* <% if (locals.isAdmin) { %> */}
      <section className="order-actions">
        <form>
          <input type="hidden" name="_csrf" value="<%= locals.csrfToken %>" />
          <input type="hidden" name="orderid" value="<%= order.id %>" />
          <select name="status">
            <option value="pending"
            //  <% if (order.status === 'pending') { %> selected <% } %>
            >
              Pending
            </option>
            <option value="fulfilled"
            //  <% if (order.status === 'fulfilled') { %> selected <% } %>
            >
              Fulfilled
            </option>
            <option value="cancelled"
            // <% if (order.status === 'cancelled') { %> selected <% } %>
            >
              Cancelled
            </option>
          </select>
          <button className="btn btn-alt">Update</button>
        </form>
      </section>
      {/* <% } %> */}
    </article >
  );
}


export default OrderItem