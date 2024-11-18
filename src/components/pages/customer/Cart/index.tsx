// <%- include('../../shared/includes/head', { pageTitle: 'Your Cart' }) %>
// <script src="/scripts/cart-item-management.js" defer></script>

import React from "react";
import Button from "../../../atoms/Button";
import { H1 } from "../../../atoms/Typography";
import CartItem from "../../../molecules/CartItem";
import { SCartTotal } from "./styles";

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

const Cart = (): React.ReactNode => {

  const cart = [
    {
      item: {
        product: {
          id: 1,
          title: "Teste",
          price: 29.90,
        },
        quantity: 1,
        totalPrice: 29.90,
      }
    },
    {
      item: {
        product: {
          id: 2,
          title: "Teste",
          price: 29.90,
        },
        quantity: 1,
        totalPrice: 29.90,
      }
    },
    {
      item: {
        product: {
          id: 3,
          title: "Teste",
          price: 29.90,
        },
        quantity: 1,
        totalPrice: 29.90,
      }
    },
  ];


  return (
    <main>
      <H1>Your Cart</H1>
      <ul id="cart-items">
        {
          cart.map((cartItem) => (
            <li key={cartItem.item.product.id}>
              <CartItem item={cartItem} />
            </li>
          ))
        }
      </ul>
      <SCartTotal>
        <p>Total: $<span id="cart-total-price">
          {/* <%= locals.cart.totalPrice.toFixed(2) %> */}
        </span></p>

        {/* <% if (locals.isAuth && locals.cart.totalQuantity > 0) { %> */}
        {/* <form action="/orders" method="POST">
          <input type="hidden" name="_csrf" value="<%= locals.csrfToken %>" />
          <Button>Buy Products</Button>
        </form> */}
        {/* <% } else { %> */}
        <p id="cart-total-fallback">Log in and add item to the cart to proceed and purchase the items.</p>
        {/* <% } %> */}
      </SCartTotal>
    </main>

  );
}


export default Cart