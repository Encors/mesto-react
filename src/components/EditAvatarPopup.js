import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const inputRef = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value /* Значение инпута, полученное с помощью рефа */,
    });
  }

  return (
    <PopupWithForm
      classSelector="set-avatar"
      formName="avatar"
      title={"Обновить аватар"}
      submitBtnText={isLoading ? `Сохранение...` : `Сохранить`}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input type="url" className="popup__input popup__input_type_img-link" placeholder="Ссылка на картинку" name="avatar" id="link-avatar" required ref={inputRef} />
      <span id="link-avatar-error" className="error" />
    </PopupWithForm>
  );
}
