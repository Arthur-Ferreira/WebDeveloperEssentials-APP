const ProdcutDetails: React.FC = () => {
  return (
    <main id="product-details">
      <header>
        {/* <img src="<%= product.imageUrl %>" alt="<%= product.title %>"> */}
        <div id="product-info">
          <h1>
            {/* <!-- <%= product.title %> --> */}
          </h1>
          <p>
            {/* <!-- $<%= product.price %> --> */}
          </p>
          <button
          // class="btn" data-productid="<%= product.id %>" data-csrf="<%= locals.csrfToken %>"
          >Add to
            Cart</button>
        </div>
      </header>

      <p id="product-description">
        {/* <!-- <%= product.description %> --> */}
      </p>
    </main>
  );
}

export default ProdcutDetails