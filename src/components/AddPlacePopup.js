import React, { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onAddPlace, isLoading, onClose }) {
  const inputNameRef = useRef("");
  const inputLinkRef = useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({ name: inputNameRef.current.value, link: inputLinkRef.current.value });
  }

  useEffect(() => {
    inputNameRef.current.value = "";
    inputLinkRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      classSelector="add-card"
      formName="card"
      title={"Новое место"}
      submitBtnText={isLoading ? `Создание...` : `Создать`}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <input
        type="text"
        className="popup__input popup__input_type_place-name"
        placeholder="Название"
        name="nameCard"
        id="name-card"
        required
        minLength={2}
        maxLength={30}
        ref={inputNameRef}
      />
      <span id="name-card-error" className="error" />
      <input
        type="url"
        className="popup__input popup__input_type_img-link"
        placeholder="Ссылка на картинку"
        name="linkCard"
        id="link-card"
        required
        ref={inputLinkRef}
      />
      <span id="link-card-error" className="error" />
    </PopupWithForm>
  );
}
