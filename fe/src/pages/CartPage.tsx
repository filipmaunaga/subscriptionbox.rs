import React, { useEffect, useState } from "react";
import { useCart } from "../store/cart";
import SubscriptionBoxCard from "../components/SubscriptionBoxCard";
import "../styles/pages/CartPage.scss";
import PrimaryButton from "../components/PrimaryButton";
import ButtonWithIcon from "../components/ButtonWithIcon";
import RemoveModal from "../components/RemoveModal";
import { useGetTotalAmount } from "../hooks/useGetTotalAmount";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const subscriptionBoxes = useCart((state) => state.subscriptionBoxes);
  const navigate = useNavigate();
  const { total } = useGetTotalAmount();
  const removeBox = useCart((state) => state.removeBox);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedBoxId, setSelectedBoxId] = useState<string | null>(null);

  const handleRemoveBox = (boxId: string) => {
    setSelectedBoxId(boxId);
    setModalOpen(true);
  };

  const confirmRemoveBox = () => {
    if (selectedBoxId) {
      removeBox(selectedBoxId);
      setModalOpen(false);
      setSelectedBoxId(null);
    }
  };

  const cancelRemove = () => {
    setModalOpen(false);
    setSelectedBoxId(null);
  };

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
          onClick={() => handleRemoveBox(box.boxId)}
          isRemovable={true}
        />
      ))}
      <div className="total-container">
        <h4 className="total-text">Total: {total} €</h4>
        <ButtonWithIcon
          buttonText="Go to checkout"
          rightIconSrc="/icons/right-arrow.svg"
          onClick={() => navigate("/checkout")}
        />
      </div>
      <RemoveModal
        isOpen={isModalOpen}
        onClose={cancelRemove}
        onConfirm={confirmRemoveBox}
        title="Remove Subscription Box"
        message="Are you sure you want to remove this subscription box?"
      />
    </div>
  );
};

export default CartPage;
