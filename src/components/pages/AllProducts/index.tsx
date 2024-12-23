import List from "../../atoms/List";
import { useLoaderData } from "react-router-dom";
import ProductItem from "../../molecules/ProductItem";

import { H1 } from "../../atoms/Typography";
import { ObjectId } from "mongodb";

type Products = {
  products: {
    id: ObjectId | { $oid: string };
    imagePath: string;
    title: string;
  }[]
}
export default function AllProducts() {  
  const data = useLoaderData() as Products
  const products = data.products

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