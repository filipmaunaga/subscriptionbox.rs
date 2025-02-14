import React from "react";
import "../styles/components/DataInput.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { isEditable } from "@testing-library/user-event/dist/utils";

interface IDataInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  labelText: string;
  isEditable: boolean;
  onEdit?: () => void;
}

const DataInput: React.FC<IDataInput> = ({
  labelText,
  isEditable,
  onEdit,
  ...props
}) => {
  return (
    <div className="edit-input-container">
      <div className="data-input-container">
        <input className="data-input" {...props} />
        <label className="data-input-label">{labelText}</label>
      </div>
      {isEditable && (
        <button className="edit-input-button" onClick={onEdit} type="button">
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      )}
    </div>
  );
};

export default DataInput;
