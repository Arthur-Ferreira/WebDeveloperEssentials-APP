import { parseMixedDate, parseMixedNumber } from "../../../utils/parserMixers";
import Badge from "../../atoms/Badge";
import Button from "../../atoms/Button";
import { SDetailsList, SOrderItem, SOrderItemPrice, SOrderSummary } from "./styles";


const OrderItem = ({ order }: { order: IOrder }): JSX.Element => {
  const { productData, userData, date } = order
  const { totalPrice, items } = productData

  const parsetotalPrice = parseMixedNumber(totalPrice)
  const formattedDate = parseMixedDate(date)

  return (
    <SOrderItem>
      <SOrderSummary>
        <h2>
          <SOrderItemPrice>$
            {parsetotalPrice.toFixed(2)}
          </SOrderItemPrice> - {formattedDate}
        </h2>
        <p><Badge>
          {order.status.toUpperCase()}
        </Badge></p>
      </SOrderSummary>

      <section>
        {/* if (locals.isAdmin) { 
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
         } */}
        <SDetailsList>
          {items.map(item => (
            <li key={items.indexOf(item)}>
              {item.product.title} - $ {parseMixedNumber(item.totalPrice).toFixed(2)} ($ {parseMixedNumber(item.product.price).toFixed(2)} x  {parseMixedNumber(item.quantity)})
            </li>
          ))}
        </SDetailsList>
      </section>

      {/* if (locals.isAdmin) { 
      <section className="order-actions">
        <form>
          <input type="hidden" name="_csrf" value=" locals.csrfToken" />
          <input type="hidden" name="orderid" value=" order.id" />
          <select name="status">
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
          </select>
          <Button $alt>Update</Button>
        </form>
      </section>
       } */}
    </SOrderItem >
  );
}


export default OrderItem