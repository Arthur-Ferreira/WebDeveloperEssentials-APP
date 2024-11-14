import List from "../../../atoms/List";
import ProductItem from "../../../molecules/ProductItem";

import boldBag from "../../../../assets/promo/boldBagSaleBanner.png";

export default function AllProducts() {

  const products = [
    {
      title: "Titulo 1",
      imageUrl: `${boldBag}`,
      id: "1"
    }, {
      title: "Titulo 2",
      imageUrl: `${boldBag}`,
      id: "2"
    }, {
      title: "Titulo 3",
      imageUrl: `${boldBag}`,
      id: "3"
    }, {
      title: "Titulo 4",
      imageUrl: `${boldBag}`,
      id: "4"
    }, {
      title: "Titulo 5",
      imageUrl: `${boldBag}`,
      id: "5"
    }, {
      title: "Titulo 6",
      imageUrl: `${boldBag}`,
      id: "6"
    }
  ];

  return (
    <>
      <main>
        <h1>All Products</h1>
        <List>
          {products.map(product => (
            <li key={product.id}>
              <ProductItem product={product} />
            </li>
          ))}
        </List>
      </main>
    </>
  );
}