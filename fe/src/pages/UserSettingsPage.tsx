import React, { useState } from "react";
import "../styles/pages/UserSettingsPage.scss";
import DataInput from "../components/DataInput";
import PrimaryButton from "../components/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

const SettingsPage = () => {
  return (
    <div className="settings-container">
      <div className="settings-options">
        <Link to="general" className="settings-option">
          <h6 className="settings-option-title">General</h6>
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
        <Link to="payment" className="settings-option">
          <h6 className="settings-option-title">Payment</h6>
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
      <div className="settings-content">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsPage;
