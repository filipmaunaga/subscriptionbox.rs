import React, { useState } from "react";
import "../../../styles/pages/UserSettingsPage.scss";
import DataInput from "../../../components/DataInput";
import PrimaryButton from "../../../components/PrimaryButton";

const GeneralSettingsPage = () => {
  const initialData = {
    name: "Ignacio Salvatore",
    email: "ignacio@salvatore.com",
    phone: "+381601230002",
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
        <legend className="settings-legend">General settings</legend>
        <DataInput
          labelText={"Name"}
          isEditable={false}
          value={generalSettings.name}
          readOnly
          disabled
        />
        <DataInput
          labelText={"Email"}
          isEditable={false}
          value={generalSettings.email}
          readOnly
          disabled
        />
        <DataInput
          labelText={"Phone"}
          isEditable={isDisabled}
          value={generalSettings.phone}
          disabled={isDisabled}
          onEdit={() => setIsDisabled(false)}
          onChange={(e) =>
            setGeneralSettings({ ...generalSettings, phone: e.target.value })
          }
        />
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

export default GeneralSettingsPage;
