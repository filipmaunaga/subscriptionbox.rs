import React, { useState } from "react";
import "../styles/pages/SingleProviderPage.scss";
import { subscriptionBoxTestData } from "../misc/testData";
import SubscriptionBoxCard from "../components/SubscriptionBoxCard";
import Dropdown from "../components/Dropdown";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate, useParams } from "react-router-dom";

const SingleProviderPage = () => {
  const [dropdownOptions, setDropdownOptions] = useState<
    { value: string; name: string }[]
  >([
    { value: "popular", name: "Most popular" },
    { value: "alphabetical", name: "Alphabetical" },
    { value: "recentlyAdded", name: "Recently added" },
  ]);
  const params = useParams();
  const navigate = useNavigate();

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
          onClick={() => navigate(`/providers/${params.id}/create-box`)}
        />
      </div>
      {subscriptionBoxTestData.map((box) => (
        <SubscriptionBoxCard
          key={box.name}
          title={box.name}
          price={box.price}
          imgUrl={box.imgUrl}
          category={box.name}
          onClick={() => navigate("/")}
        />
      ))}
      <div className="custom-box-text-button-container">
        <h3 className="custom-box-text">
          Didn't find anything that suits your needs? No problem, just click the
          button below and request a custom box!
        </h3>
        <PrimaryButton
          buttonText="create your own box"
          onClick={() => navigate(`/providers/${params.id}/create-box`)}
        />
      </div>
    </div>
  );
};

export default SingleProviderPage;
