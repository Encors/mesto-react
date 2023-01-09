import React, { useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isOpenAvatarPopup, setIsOpenAvatarPopup] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isOpenPlacePopup, setIsOpenPlacePopup] = useState(false);
  const [isOpenSelectedCard, setIsOpenSelectedCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleCardClick(card) {
    setIsOpenSelectedCard(true);
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsOpenAvatarPopup(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsOpenPlacePopup(true);
  }

  function handleClosePopup(evt) {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close-btn")) {
      closeAllPopups();
    }
  }

  function closeAllPopups() {
    setIsOpenAvatarPopup(false);
    setIsEditProfilePopupOpen(false);
    setIsOpenPlacePopup(false);
    setIsOpenSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm classSelector="edit-profile" formName="profile" title={"Редактировать профиль"} submitBtnText={"Сохранить"} isOpen={isEditProfilePopupOpen} onClose={handleClosePopup}>
        <input type="text" className="popup__input popup__input_type_name" placeholder="Имя" name="nameProfile" id="name-profile" required minLength={2} maxLength={40} />
        <span id="name-profile-error" className="error" />
        <input type="text" className="popup__input popup__input_type_job" placeholder="О себе" name="jobProfile" id="job-profile" required minLength={2} maxLength={200} />
        <span id="job-profile-error" className="error" />
      </PopupWithForm>
      <PopupWithForm classSelector="add-card" formName="card" title={"Новое место"} submitBtnText={"Создать"} isOpen={isOpenPlacePopup} onClose={handleClosePopup}>
        <input type="text" className="popup__input popup__input_type_place-name" placeholder="Название" name="nameCard" id="name-card" required minLength={2} maxLength={30} />
        <span id="name-card-error" className="error" />
        <input type="url" className="popup__input popup__input_type_img-link" placeholder="Ссылка на картинку" name="linkCard" id="link-card" required />
        <span id="link-card-error" className="error" />
      </PopupWithForm>
      <PopupWithForm classSelector="confirm" formName="confirm" title={"Вы уверены?"} submitBtnText={"Да"} onClose={handleClosePopup}></PopupWithForm>
      <PopupWithForm classSelector="set-avatar" formName="avatar" title={"Обновить аватар"} submitBtnText={"Сохранить"} isOpen={isOpenAvatarPopup} onClose={handleClosePopup}>
        <input type="url" className="popup__input popup__input_type_img-link" placeholder="Ссылка на картинку" name="avatar" id="link-avatar" required />
        <span id="link-avatar-error" className="error" />
      </PopupWithForm>
      <ImagePopup isOpen={isOpenSelectedCard} card={selectedCard} onClose={handleClosePopup} />
    </div>
  );
}

export default App;
