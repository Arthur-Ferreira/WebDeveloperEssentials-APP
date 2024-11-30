import { parseMixedNumber } from "../../utils/parserMixers";
import Badge from "../atoms/Badge";
import Button from "../atoms/Button";


const OrderItem = ({ order }: { order: IOrder }): JSX.Element => {
  const { productData, userData } = order
  const { totalPrice, items } = productData

  const parsetotalPrice = parseMixedNumber(totalPrice)

  return (
    <article className="order-item">
      <header className="order-summary">
        <h2>
          <span className="order-item-price">$
            {parsetotalPrice}
          </span>
          {/* -  order.formattedDate */}
        </h2>
        <p><Badge>
          {order.status.toUpperCase()}
        </Badge></p>
      </header>

      <section className="order-details">
        {/* if (locals.isAdmin) { */}
        <address>
          <p>
            <a href="mailto: order.userData.email">
              {order.userData.name}
            </a>
          </p>
          <p>
            {userData.address.street} {userData.address.postalCode} {userData.address.city}
          </p>
        </address>
        {/* } */}
        <ul>
          {items.map(item => (
            <li key={items.indexOf(item)}>
              {item.product.title} - $ {parseMixedNumber(item.totalPrice)} ($ {parseMixedNumber(item.product.price)} x  {parseMixedNumber(item.quantity)})
            </li>
          ))}
        </ul>
      </section>

      {/* if (locals.isAdmin) { */}
      <section className="order-actions">
        <form>
          <input type="hidden" name="_csrf" value=" locals.csrfToken" />
          <input type="hidden" name="orderid" value=" order.id" />
          {/* <select name="status">
            <option value="pending"
            //  if (order.status === 'pending') { selected }
            >
              Pending
            </option>
            <option value="fulfilled"
            //  if (order.status === 'fulfilled') { selected }
            >
              Fulfilled
            </option>
            <option value="cancelled"
            // if (order.status === 'cancelled') { selected }
            >
              Cancelled
            </option>
          </select> */}
          <Button $alt>Update</Button>
        </form>
      </section>
      {/* } */}
    </article >
  );
}


export default OrderItem