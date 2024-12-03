import List from "../../atoms/List";
import { useLoaderData } from "react-router-dom";
import ProductItem from "../../molecules/ProductItem";

// import boldBag from "../../../assets/promo/boldBagSaleBanner.png";
import { H1 } from "../../atoms/Typography";
import { parseMixedString } from "../../../utils/parserMixers";

type Products = {
  "products": IProduct[]
}
export default function AllProducts() {

  // const products = [
  //   {
  //     title: "Titulo 1",
  //     imageUrl: `${boldBag}`,
  //     id: "1"
  //   }, {
  //     title: "Titulo 2",
  //     imageUrl: `${boldBag}`,
  //     id: "2"
  //   }, {
  //     title: "Titulo 3",
  //     imageUrl: `${boldBag}`,
  //     id: "3"
  //   }, {
  //     title: "Titulo 4",
  //     imageUrl: `${boldBag}`,
  //     id: "4"
  //   }, {
  //     title: "Titulo 5",
  //     imageUrl: `${boldBag}`,
  //     id: "5"
  //   }, {
  //     title: "Titulo 6",
  //     imageUrl: `${boldBag}`,
  //     id: "6"
  //   }
  // ];
  const data = useLoaderData() as Products
  const products = data.products

  return (
    <>
      <main>
        <H1>All Products</H1>
        <List>
          {products.map(product => (
            <li key={parseMixedString(product._id)}>
              <ProductItem product={product} />
            </li>
          ))}
        </List>
      </main>
    </>
  );
}