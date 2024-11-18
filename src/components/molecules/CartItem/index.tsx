import React from "react"
import Button from "../../atoms/Button";
import { H3 } from "../../atoms/Typography";

interface IProduct {
  item: {
    product: {
      id: number,
      title: string,
      price: number,
    },
    quantity: number,
    totalPrice: number,
  }
}


const CartItem = ({ item }: { item: IProduct }): React.ReactNode => {
  return (
    <article className="cart-item">
      <div className="cart-item-info">
        <H3>
          {item.item.product.title}
        </H3>
        <p>$<span className="cart-item-price">
          {item.item.totalPrice.toFixed(2)}
        </span> <span className="cart-product-price">
            (${item.item.product.price.toFixed(2)})
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