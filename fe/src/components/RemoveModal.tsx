import "../styles/components/RemoveModal.scss";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

const RemoveModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Removal",
  message = "Are you sure you want to remove this item?",
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">{title}</h3>
        <p className="modal-message">{message}</p>
        <div className="modal-buttons">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-confirm" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveModal;
