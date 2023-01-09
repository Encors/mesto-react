import React from 'react';

export default function PopupWithForm({classSelector, isOpen, onClose, formName, title, submitBtnText, children}) {
  return (
    <div className={`popup popup_type_${classSelector} ${isOpen ? "popup_opened" : ""} `}>
      <div className="popup__container">
        <button className="popup__close-btn button" type="button" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={formName}>
          {children}
          <button className="popup__submit-btn button" type="submit">
            {submitBtnText}
          </button>
        </form>
      </div>
    </div>
  );
}
