import List from "../../../atoms/List";
import ProductItem from "../../../molecules/ProductItem";

export default function AllProducts() {

  const products = [
    {
      title: "Titulo 1",
      imageUrl: "testeimage.png",
      id: "1"
    }, {
      title: "Titulo 2",
      imageUrl: "testeimage.png",
      id: "2"
    }, {
      title: "Titulo 3",
      imageUrl: "testeimage.png",
      id: "3"
    }, {
      title: "Titulo 4",
      imageUrl: "testeimage.png",
      id: "4"
    }, {
      title: "Titulo 5",
      imageUrl: "testeimage.png",
      id: "5"
    }, {
      title: "Titulo 6",
      imageUrl: "testeimage.png",
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