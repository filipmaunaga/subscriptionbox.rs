import React from "react";
import "../styles/components/PrimaryButton.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ buttonText, ...props }) => {
  return (
    <button className="primary-button" {...props}>
      <p className="primary-button-text">{buttonText}</p>
    </button>
  );
};

export default PrimaryButton;
