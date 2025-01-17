// import for Link
import { Link } from "react-router";
import { useContext } from "react";
import { ShopContext } from "../App";

function Links() {
  const { cartItems } = useContext(ShopContext);

  return (
    <ul>
      {/* Links */}
      <li>
        {/* <Link to="Link to the cart"> */}
        <span>Cart</span>
        <div>{cartItems.length}</div>
        <ul>
          {cartItems.map((cartItem) => {
            return <li key={cartItem}>{cartItem}</li>;
          })}
        </ul>
        {/* </Link> */}
      </li>
    </ul>
  );
}

export default function Header() {
  return (
    <header>
      {/* Other header elements */}
      <nav>
        <Links />
      </nav>
    </header>
  );
}
