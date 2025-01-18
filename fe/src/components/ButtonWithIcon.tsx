import React from "react";
import "../styles/components/ButtonWithIcon.scss";

interface IButtonWithIcon {
  onClick: () => void;
  buttonText: string;
  leftIconSrc?: string;
  rightIconSrc?: string;
}

const ButtonWithIcon: React.FC<IButtonWithIcon> = ({
  onClick,
  buttonText,
  leftIconSrc,
  rightIconSrc,
}) => {
  return (
    <button className="button-with-icon" onClick={onClick}>
      {leftIconSrc && <img src={leftIconSrc} alt="left icon" />}
      <p className="button-with-icon-text">{buttonText}</p>
      {rightIconSrc && <img src={rightIconSrc} alt="right icon" />}
    </button>
  );
};

export default ButtonWithIcon;
