import React, { useEffect } from "react";

export default function Popup({ children, isOpen, onClose, classSelector }) {
  function handleClosePopup(evt) {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__close-btn") ||
      evt.key === "Escape"
    ) {
      onClose();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClosePopup);
      document.addEventListener("keydown", handleClosePopup);

      return () => {
        document.removeEventListener("keydown", handleClosePopup);
        document.removeEventListener("mousedown", handleClosePopup);
      };
    }
  }, [isOpen]);

  return (
    <div className={`popup popup_type_${classSelector} ${isOpen ? "popup_opened" : ""} `}>
      {children}
    </div>
  );
}
