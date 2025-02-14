import React, { useState } from "react";
import "../../../styles/pages/UserSettingsPage.scss";
import DataInput from "../../../components/DataInput";
import PrimaryButton from "../../../components/PrimaryButton";

const PaymentSettingsPage = () => {
  const initialData = {
    cardNumber: "1240 **** **** **11",
  };
  const [originalData] = useState(initialData);

  const [isDisabled, setIsDisabled] = useState(true);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("deleted");
    setIsDisabled(true);
  };

  return (
    <form className="settings-form-container" onSubmit={handleSubmit}>
      <fieldset className="settings-fieldset">
        <legend className="settings-legend">Payment settings</legend>
        <DataInput
          labelText={"Phone"}
          isEditable={isDisabled}
          value={originalData.cardNumber}
          disabled={isDisabled}
          onEdit={() => setIsDisabled(false)}
        />
      </fieldset>
      {!isDisabled && (
        <>
          <div className="cancel-button-container">
            <PrimaryButton type="submit" buttonText="Delete card" />
          </div>
        </>
      )}
    </form>
  );
};

export default PaymentSettingsPage;
