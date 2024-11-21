import Button from "../../../atoms/Button";
import { H2 } from "../../../atoms/Typography";
import boldBag from "../../../../assets/promo/boldBagSaleBanner.png";
import { ProductDetailsDescription, ProductDetailsHeader, ProductDetailsImage, ProductDetailsInfo } from "./styles";


const ProdcutDetails: React.FC = () => {
  return (
    <main id="product-details">
      <ProductDetailsHeader>
        <ProductDetailsImage src={boldBag} alt="<%= product.title %>" />
        <ProductDetailsInfo>
          <H2>
            Title
          </H2>
          <p>
            {/* <!-- $<%= product.price %> --> */}
            $29.90
          </p>
          <Button
          // data-productid="<%= product.id %>" data-csrf="<%= locals.csrfToken %>"
          >Add to
            Cart</Button>
        </ProductDetailsInfo>
      </ProductDetailsHeader>

      <ProductDetailsDescription>
        {/* {product.description} */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officiis nam. A unde quia aut adipisci odio est iusto facilis ipsa maiores possimus dignissimos quae fugiat, sed omnis nisi quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, exercitationem voluptas commodi, odio fuga quis, quas possimus optio aliquam soluta ex eos labore numquam molestiae! Et autem unde deserunt hic?

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officiis nam. A unde quia aut adipisci odio est iusto facilis ipsa maiores possimus dignissimos quae fugiat, sed omnis nisi quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, exercitationem voluptas commodi, odio fuga quis, quas possimus optio aliquam soluta ex eos labore numquam molestiae! Et autem unde deserunt hic?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officiis nam. A unde quia aut adipisci odio est iusto facilis ipsa maiores possimus dignissimos quae fugiat, sed omnis nisi quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, exercitationem voluptas commodi, odio fuga quis, quas possimus optio aliquam soluta ex eos labore numquam molestiae! Et autem unde deserunt hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore architecto amet ipsam provident totam. Harum dignissimos est modi sunt eveniet? Quos ea provident libero debitis accusantium minus non officia nobis!
      </ProductDetailsDescription>
    </main>
  );
}

export default ProdcutDetails