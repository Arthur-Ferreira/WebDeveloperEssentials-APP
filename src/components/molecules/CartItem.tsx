import React from "react"
import Button from "../atoms/Button";

const CartItem: React.FC = () => {
  return (
    <article className="cart-item">
      <div className="cart-item-info">
        <h2>
          {/* <%= item.product.title %> */}
        </h2>
        <p>$<span className="cart-item-price">
          {/* <%= item.totalPrice.toFixed(2) %> */}
        </span> <span className="cart-product-price">$
            {/* (<%= item.product.price.toFixed(2) %>) */}
          </span></p>
      </div>

      <form className="cart-item-management" data-productid="<%= item.product.id %>" data-csrf="<%= locals.csrfToken %>">
        <input type="number" value="<%= item.quantity %>" required />
        <Button $alt>Update</Button>
      </form>
    </article>
  );
}

export default CartItem;