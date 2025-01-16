import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";


function App() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([
    "Ball", "Bat", "Football" /* List of Items in Cart */
  ]);
  const products =
    null; /* some custom hook that fetches products and returns the fetched products */

  const addToCart = () => {
    // add to cart logic (this adds to cartItems)
  };

  return (
    <>
      <div>
        <Header cartItemsCount={cartItems.length} />
        {/* <ProductDetail addToCart={addToCart} products={products} /> */}
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
