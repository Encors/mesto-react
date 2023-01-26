import React from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function ConfirmationPopup({ deletingCard, isOpen, onClose, isLoading, onCardDelete }) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(deletingCard);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      classSelector="confirm"
      formName="confirm"
      title={"Вы уверены?"}
      submitBtnText={isLoading ? `Сохранение...` : `Да`}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}
