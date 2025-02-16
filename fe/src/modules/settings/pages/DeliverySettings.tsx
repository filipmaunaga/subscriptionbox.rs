import React, { useState } from "react";
import "../../../styles/pages/UserSettingsPage.scss";
import DataInput from "../../../components/DataInput";
import PrimaryButton from "../../../components/PrimaryButton";

const DeliverySettingsPage = () => {
  const initialData = {
    deliveryAddress: "Sistrells 20",
    homeType: "apartment",
    apartmentNumber: 30,
    apartmentFlat: 4,
  };
  const [originalData, setOriginalData] = useState(initialData);

  const [generalSettings, setGeneralSettings] = useState(initialData);
  const [isDisabled, setIsDisabled] = useState(true);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);
    setOriginalData(generalSettings);
    console.log(generalSettings);
  };

  return (
    <form className="settings-form-container" onSubmit={handleSubmit}>
      <fieldset className="settings-fieldset">
        <legend className="settings-legend">Delivery settings</legend>
        <DataInput
          labelText={"Delivery Address"}
          isEditable={isDisabled}
          value={generalSettings.deliveryAddress}
          disabled={isDisabled}
          onEdit={() => setIsDisabled(false)}
          onChange={(e) =>
            setGeneralSettings({
              ...generalSettings,
              deliveryAddress: e.target.value,
            })
          }
        />
        <div className="delivery-options-container">
          <label htmlFor="homeType">Home type:</label>
          <select
            name="homeType"
            value={generalSettings.homeType}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setGeneralSettings({
                ...generalSettings,
                homeType: e.target.value,
              })
            }
          >
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>
        {generalSettings.homeType === "apartment" && (
          <>
            <DataInput
              labelText={"Apartment number"}
              isEditable={isDisabled}
              value={generalSettings.apartmentNumber}
              type="number"
              disabled={isDisabled}
              onEdit={() => setIsDisabled(false)}
              onChange={(e) =>
                setGeneralSettings({
                  ...generalSettings,
                  apartmentNumber: parseInt(e.target.value),
                })
              }
            />
            <DataInput
              labelText={"Apartment flat"}
              isEditable={isDisabled}
              value={generalSettings.apartmentFlat}
              disabled={isDisabled}
              onEdit={() => setIsDisabled(false)}
              onChange={(e) =>
                setGeneralSettings({
                  ...generalSettings,
                  apartmentFlat: parseInt(e.target.value),
                })
              }
            />
          </>
        )}
      </fieldset>
      {!isDisabled && (
        <>
          <PrimaryButton type="submit" buttonText="Save" />
          <div className="cancel-button-container">
            <PrimaryButton
              type="button"
              buttonText="Cancel"
              onClick={() => {
                setGeneralSettings(originalData);
                setIsDisabled(true);
              }}
            />
          </div>
        </>
      )}
    </form>
  );
};

export default DeliverySettingsPage;
