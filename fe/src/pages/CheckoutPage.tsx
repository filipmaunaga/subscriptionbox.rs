import React from "react";
import "../styles/pages/CheckoutPage.scss";
import PrimaryButton from "../components/PrimaryButton";

const CheckoutPage = () => {
  return (
    <div className="checkout-page-container">
      <h2 className="checkout-page-title">Credit card details</h2>
      <form
        onSubmit={() => console.log("aaaaa")}
        className="checkout-page-form"
      >
        <div className="input-container">
          <label htmlFor="fname">First name:</label>
          <input type="text" id="fname" name="fname" />
        </div>
        <div className="input-container">
          <label htmlFor="lname">Last name:</label>
          <input type="text" id="lname" name="lname" />
        </div>
        <div className="grouped-input-container">
          <div className="input-container">
            <label htmlFor="expireDate">Expiry date:</label>
            <input type="text" id="expiryDate" name="expiryDate" />
          </div>
          <div className="input-container">
            <label htmlFor="cvc">CVC:</label>
            <input type="text" id="cvc" name="cvc" />
          </div>
        </div>
        <PrimaryButton buttonText={"Confirm"} type="submit" />
      </form>
    </div>
  );
};

export default CheckoutPage;
