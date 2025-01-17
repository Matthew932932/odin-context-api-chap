import { useContext } from "react";
import { ShopContext } from "../App"

export default function ProductDetail() {
  // console.log("type of");
  // console.log(typeof products);
  // console.log(products);

  // const product = products.find(() => "Board");

	const { products, addToCart } = useContext(ShopContext);

  return (
    <div>
      {/* Image of the product */}
      {/* {products} */}
      {/* {console.log(products)} */}
      <div>
        {/* elements that align with the design */}
        <h1>Products: </h1>
        <ul>
          {products.map((product) => {
            return <li key={product}>{product}<button type="button" onClick={() => addToCart(product)}>
						Add to Cart
					</button></li>;
          })}
        </ul>
        
      </div>
    </div>
  );
}
