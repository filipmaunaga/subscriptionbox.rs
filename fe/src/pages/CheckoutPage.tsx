import React, { useState } from "react";
import "../styles/pages/CheckoutPage.scss";
import PrimaryButton from "../components/PrimaryButton";
import { useGetTotalAmount } from "../hooks/useGetTotalAmount";

interface IPaymentCard {
  cardName: string;
  cardNumber: number;
  cardExpiration: string;
  cardCvc: number;
  amount: number;
}
const CheckoutPage = () => {
  const { total } = useGetTotalAmount();
  const [cardDetails, setCardDetails] = useState<IPaymentCard>({
    cardName: "",
    cardNumber: 0,
    cardExpiration: "",
    cardCvc: 0,
    amount: 0,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedCardDetails = { ...cardDetails, amount: total };

    console.log("card details", updatedCardDetails);
  };

  return (
    <div className="checkout-page-container">
      <h2 className="checkout-page-title">Credit card details</h2>
      <form onSubmit={handleSubmit} className="checkout-page-form">
        <div className="input-container">
          <label htmlFor="fname">Name on the card</label>
          <input
            type="text"
            id="fname"
            name="fname"
            required
            onChange={(e) =>
              setCardDetails({ ...cardDetails, cardName: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label htmlFor="lname">Card number</label>
          <input
            type="text"
            id="lname"
            pattern="^\d{16}$"
            name="lname"
            required
            onChange={(e) =>
              setCardDetails({
                ...cardDetails,
                cardNumber: parseInt(e.target.value),
              })
            }
          />
        </div>
        <div className="grouped-input-container">
          <div className="input-container">
            <label htmlFor="expireDate">Expiration date:</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              pattern="^(0[1-9]|1[0-2])\/\d{2}$"
              required
              onChange={(e) =>
                setCardDetails({
                  ...cardDetails,
                  cardExpiration: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="cvc">CVC:</label>
            <input
              type="text"
              id="cvc"
              pattern="^\d{3,4}$"
              name="cvc"
              required
              onChange={(e) =>
                setCardDetails({
                  ...cardDetails,
                  cardCvc: parseInt(e.target.value),
                })
              }
            />
          </div>
        </div>
        <PrimaryButton buttonText={"Confirm"} type="submit" />
      </form>
    </div>
  );
};

export default CheckoutPage;
