import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import { createContext } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [cartItems, setCartItems] = useState(["Long","Short","Round"]);
//   const products =
//     ["Ball", "Bat", "Football", "Boots", "Board"]; /* some custom hook that fetches products and returns the fetched products */

//   // console.log("set products")
//   // console.log(products)

//   const addToCart = (product) => {
//     let temparr = cartItems.map((item)=>{return item;});
//     temparr.push(product);
//     console.log("temparr")
//     console.log(temparr)
//     console.log("add to cart product")
//     console.log(product)
//     setCartItems(temparr);
//     // setCount(1)
//     console.log("add to cart products")
//     console.log(cartItems)
//   };

//   return (
//     <>
//       <div>
//         {console.log("cartItems 2")}
//         {console.log(cartItems)}
//         {console.log("type of 2")}
//         {console.log(typeof cartItems)}

//         <ul>
//           {cartItems.map((cartItem) => {
//             return <li key={cartItem}>{cartItem}</li>;
//           })}
//         </ul>
//         <Header cartItemsCount={cartItems.length} />
//         <ProductDetail addToCart={addToCart} products={products} />
//       </div>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//     </>
//   );
// }

export const ShopContext = createContext({
  products: ["Ball", "Bat", "Football", "Boots", "Board"],
  cartItems: ["Long", "Short", "Round"],
  addToCart: (product) => {
    let temparr = this.cartItems.map((item) => {
      return item;
    });
    temparr.push(product);
    console.log("temparr");
    console.log(temparr);
    console.log("add to cart product");
    console.log(product);
    this.cartItems = temparr.map((item) => {
      return item;
    });
    // setCount(1)
    console.log("add to cart products");
    console.log(this.cartItems);
  },
});


function App() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState(["Long", "Short", "Round"]);
  const products = [
    "Ball",
    "Bat",
    "Football",
    "Boots",
    "Board",
  ]; /* some custom hook that fetches products and returns the fetched products */

  

  // console.log("set products")
  // console.log(products)

  const addToCart = (product) => {
    let temparr = cartItems.map((item) => {
      return item;
    });
    temparr.push(product);
    console.log("temparr");
    console.log(temparr);
    console.log("add to cart product");
    console.log(product);
    setCartItems(temparr);
    // setCount(1)
    console.log("add to cart products");
    console.log(cartItems);
  };

  return (
    <>
      <div>
        {console.log("cartItems 2")}
        {console.log(cartItems)}
        {console.log("type of 2")}
        {console.log(typeof cartItems)}

        
        <ShopContext.Provider value={{ cartItems, products, addToCart }}>
          <Header />
          <ProductDetail />
        </ShopContext.Provider>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
