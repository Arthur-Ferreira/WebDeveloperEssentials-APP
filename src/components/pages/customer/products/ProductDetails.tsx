import Button from "../../../atoms/Button";
import { H1 } from "../../../atoms/Typography";

const ProdcutDetails: React.FC = () => {
  return (
    <main id="product-details">
      <header>
        {/* <img src="<%= product.imageUrl %>" alt="<%= product.title %>"> */}
        <div id="product-info">
          <H1>
            Title
          </H1>
          <p>
            {/* <!-- $<%= product.price %> --> */}
          </p>
          <Button
          // data-productid="<%= product.id %>" data-csrf="<%= locals.csrfToken %>"
          >Add to
            Cart</Button>
        </div>
      </header>

      <p id="product-description">
        {/* <!-- <%= product.description %> --> */}
      </p>
    </main>
  );
}

export default ProdcutDetails