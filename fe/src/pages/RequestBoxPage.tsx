import React, { useState } from "react";
import "../styles/pages/RequestBoxPage.scss";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const RequestBoxPage = () => {
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    setIsSubmitted((prevValue) => true);

    console.log("description", description);
    console.log("submitted", isSubmitted);
  };

  return (
    <>
      <div className="go-back-container" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <p className="go-back-text">Go back</p>
      </div>
      {!isSubmitted ? (
        <div className="create-box-container">
          <h2 className="create-box-title">Request a custom box</h2>
          <form className="create-box-form" onSubmit={handleSubmit}>
            <p className="description-text">
              Descibe a box you would like to subscribe to and we will get back
              to you in shortest time possible. If the box can created, it will
              appear on the boxes page of this provider.
            </p>
            <p className="example-text">
              Example: <br />I would like my box to contain Whiskas cat food 1kg
              and Pedigree dog food 10kg.
            </p>
            <label>Describe your box:</label>
            <textarea
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <PrimaryButton type="submit" buttonText="Submit" />
          </form>
        </div>
      ) : (
        <div className="box-requested-container">
          <FontAwesomeIcon icon={faCircleCheck} />
          <h2>Box request sent!</h2>
          <PrimaryButton onClick={() => navigate("/")} buttonText="Home" />
        </div>
      )}
    </>
  );
};

export default RequestBoxPage;
