import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {

  const { cartItems } = useContext(CartContext);

  console.log(cartItems);

  return (
    <div>
      <h1>Shopping Cart</h1>
    </div>
  );
};

export default Cart;