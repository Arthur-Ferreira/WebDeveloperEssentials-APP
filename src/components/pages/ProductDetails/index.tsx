import { useLoaderData } from "react-router-dom";
import Button from "../../atoms/Button";
import { H2 } from "../../atoms/Typography";
import { ProductDetailsDescription, ProductDetailsHeader, ProductDetailsImage, ProductDetailsInfo } from "./styles";
import { TProduct } from "../../../types";

const ProdcutDetails: React.FC = () => {
  const product = useLoaderData() as TProduct
  
  if(!product) {
    return (
      <main>
        <H2>No Product Found</H2>
      </main>
    )
  }

  return (
    <main>
      <ProductDetailsHeader>
        <ProductDetailsImage src={product.imageUrl} alt={`${product.title}`} />
        <ProductDetailsInfo>
          <H2>
            {product.title}
          </H2>
          <p>
            $ {product.price}
          </p>
          <Button
          // data-productid={`${product.id}`} data-csrf="<%= locals.csrfToken %>"
          >Add to
            Cart</Button>
        </ProductDetailsInfo>
      </ProductDetailsHeader>

      <ProductDetailsDescription>
        {product.description}
      </ProductDetailsDescription>
    </main>
  );
}

export default ProdcutDetails