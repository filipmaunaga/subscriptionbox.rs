import React, { useEffect, useState } from "react";
import "../styles/components/CartButton.scss";
import { useNavigate } from "react-router-dom";
import { useCart } from "../store/cart";

interface ICartButton {
  numberOfItems: number;
}

const CartButton: React.FC<ICartButton> = () => {
  const navigate = useNavigate();

  const [numberOfItems, setNumberOfItems] = useState(0);
  const subscriptionBoxes = useCart((state) => state.subscriptionBoxes);

  useEffect(() => {
    const newNumberOfItems = subscriptionBoxes.length;
    setNumberOfItems(newNumberOfItems);
  }, [subscriptionBoxes]);

  return (
    <div className="cart-button-container">
      <button className="cart-button" onClick={() => navigate("/cart")}>
        <img src="/icons/shopping-cart.svg" alt="shopping cart" />
      </button>
      {numberOfItems > 0 && <span className="cart-badge">{numberOfItems}</span>}
    </div>
  );
};

export default CartButton;
