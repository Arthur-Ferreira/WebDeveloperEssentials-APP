import { useLoaderData } from "react-router-dom";
import Button from "../../atoms/Button";
import { H2 } from "../../atoms/Typography";
import { ProductDetailsDescription, ProductDetailsHeader, ProductDetailsImage, ProductDetailsInfo } from "./styles";

type TProduct = {
  product: IProduct  
}

const ProdcutDetails: React.FC = () => {
  const data = useLoaderData() as TProduct
  const product = data.product
  
  return (
    <main>
      <ProductDetailsHeader>
        <ProductDetailsImage src={product.imagePath} alt={`${product.title}`} />
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

        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officiis nam. A unde quia aut adipisci odio est iusto facilis ipsa maiores possimus dignissimos quae fugiat, sed omnis nisi quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, exercitationem voluptas commodi, odio fuga quis, quas possimus optio aliquam soluta ex eos labore numquam molestiae! Et autem unde deserunt hic?

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officiis nam. A unde quia aut adipisci odio est iusto facilis ipsa maiores possimus dignissimos quae fugiat, sed omnis nisi quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, exercitationem voluptas commodi, odio fuga quis, quas possimus optio aliquam soluta ex eos labore numquam molestiae! Et autem unde deserunt hic?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officiis nam. A unde quia aut adipisci odio est iusto facilis ipsa maiores possimus dignissimos quae fugiat, sed omnis nisi quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, exercitationem voluptas commodi, odio fuga quis, quas possimus optio aliquam soluta ex eos labore numquam molestiae! Et autem unde deserunt hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore architecto amet ipsam provident totam. Harum dignissimos est modi sunt eveniet? Quos ea provident libero debitis accusantium minus non officia nobis! */}
      </ProductDetailsDescription>
    </main>
  );
}

export default ProdcutDetails