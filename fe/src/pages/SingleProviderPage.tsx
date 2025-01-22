import React, { useState } from "react";
import "../styles/pages/SingleProviderPage.scss";
import { mockBackendData } from "../misc/testData";
import SubscriptionBoxCard from "../components/SubscriptionBoxCard";
import Dropdown from "../components/Dropdown";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SingleProviderPage = () => {
  const [dropdownOptions, setDropdownOptions] = useState<
    { value: string; name: string }[]
  >([
    { value: "popular", name: "Most popular" },
    { value: "alphabetical", name: "Alphabetical" },
    { value: "recentlyAdded", name: "Recently added" },
  ]);
  const { id } = useParams();
  const navigate = useNavigate();

  const providersData = mockBackendData.find(
    (provider) => provider.providerId === id
  );

  return (
    <div className="provider-page-container">
      <div className="dropdown-create-box-container">
        <Dropdown
          options={dropdownOptions}
          handleChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            console.log(e.target.value)
          }
        />
        <PrimaryButton
          buttonText="create your own box"
          onClick={() => navigate(`/providers/${id}/create-box`)}
        />
      </div>
      <div
        className="back-to-providers-container"
        onClick={() => navigate("/providers")}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <p className="go-back-text">Back to all providers</p>
      </div>
      <div className="boxes-container">
        {providersData?.providerSubscriptionboxes.map((box) => (
          <SubscriptionBoxCard
            key={box.boxId}
            title={box.boxName}
            price={box.boxPrice}
            imgUrl={box.boxImgUrl}
            category={box.boxCategory}
            onClick={() => navigate(`/subscriptionbox/${box.boxId}`)}
          />
        ))}
      </div>
      <div className="custom-box-text-button-container">
        <h3 className="custom-box-text">
          Didn't find anything that suits your needs? No problem, just click the
          button below and request a custom box!
        </h3>
        <PrimaryButton
          buttonText="create your own box"
          onClick={() => navigate(`/providers/${id}/create-box`)}
        />
      </div>
    </div>
  );
};

export default SingleProviderPage;
