import React, { useEffect, useState } from "react";
import { useCart } from "../store/cart";
import SubscriptionBoxCard from "../components/SubscriptionBoxCard";
import "../styles/pages/CartPage.scss";
import PrimaryButton from "../components/PrimaryButton";
import ButtonWithIcon from "../components/ButtonWithIcon";

const CartPage = () => {
  const [total, setTotal] = useState(0);
  const subscriptionBoxes = useCart((state) => state.subscriptionBoxes);
  useEffect(() => {
    const totalFromBoxes = subscriptionBoxes
      .map((box) => box.boxPrice)
      .reduce((acc, price) => acc + price, 0);
    setTotal(Math.round(totalFromBoxes * 100) / 100);
  }, [subscriptionBoxes]);

  return (
    <div className="cart-page-container">
      <h1>Your cart</h1>
      {subscriptionBoxes.map((box) => (
        <SubscriptionBoxCard
          key={box.boxId}
          title={box.boxName}
          price={box.boxPrice}
          imgUrl={box.boxImgUrl}
          category={box.boxCategory}
          onClick={() => console.log("a")}
        />
      ))}
      <div className="total-container">
        <h4 className="total-text">Total: {total} €</h4>
        <ButtonWithIcon
          buttonText="Go to checkout"
          rightIconSrc="/icons/right-arrow.svg"
          onClick={() => console.log("checkout")}
        />
      </div>
    </div>
  );
};

export default CartPage;
