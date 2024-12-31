import List from "../../atoms/List";
import { useLoaderData } from "react-router-dom";
import ProductItem from "../../molecules/ProductItem";

import { H1 } from "../../atoms/Typography";
import { TProduct } from "../../../types";

export default function AllProducts() {
  const data = useLoaderData() as TProduct[]
  const products = data

  if (!products) {
    return (
      <main>
        <H1>No Products Found</H1>
      </main>
    )
  }

  return (
    <>
      <main>
        <H1>All Products</H1>
        <List>
          {products.map(product => (
            <li key={`${product.id}`}>
              <ProductItem product={product} />
            </li>
          ))}
        </List>
      </main>
    </>
  );
}