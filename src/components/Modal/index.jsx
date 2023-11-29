import "./style.css";
import CloseIcon from "../../assets/close.svg";

function Modal({ onClose }) {
  return (
    <div className="modal-background">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          <img src={CloseIcon} alt="Close" />
        </button>
        <p>Employee Created!</p>
      </div>
    </div>
  );
}

export default Modal;
