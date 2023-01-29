import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/api.js";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ConfirmationPopup from "./ConfirmationPopup";

function App() {
  const [isOpenAvatarPopup, setIsOpenAvatarPopup] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isOpenPlacePopup, setIsOpenPlacePopup] = useState(false);
  const [isOpenSelectedCard, setIsOpenSelectedCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loadingEditProfilePopup, setLoadingEditProfilePopup] = useState(false);
  const [loadingAddPlacePopup, setLoadingAddPlacePopup] = useState(false);
  const [loadingConfirmationPopup, setLoadingConfirmationPopup] = useState(false);
  const [loadingEditAvatarPopup, setLoadingEditAvatarPopup] = useState(false);
  const [isOpenConfirmationPopup, setIsOpenConfirmationPopup] = useState(false);
  const [deletingCard, setDeletingCard] = useState(null);

  useEffect(() => {
    api
      .getAllStartedInfo()
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleConfirmation(card) {
    setIsOpenConfirmationPopup(true);
    setDeletingCard(card);
  }

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

  useEffect(() => {
    function handelEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }

    function handleClosePopup(evt) {
      if (
        evt.target.classList.contains("popup_opened") ||
        evt.target.classList.contains("popup__close-btn")
      ) {
        closeAllPopups();
      }
    }

    document.addEventListener("mousedown", handleClosePopup);
    document.addEventListener("keydown", handelEscape);

    return () => {
      document.removeEventListener("keydown", handelEscape);
      document.removeEventListener("mousedown", handleClosePopup);
    };
  }, []);

  function closeAllPopups() {
    setIsOpenAvatarPopup(false);
    setIsEditProfilePopupOpen(false);
    setIsOpenPlacePopup(false);
    setIsOpenSelectedCard(false);
    setIsOpenConfirmationPopup(false);
    setDeletingCard(null);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    if (!isLiked) {
      api
        .putLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      api
        .deleteLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function handleUpdateUser({ name, about }) {
    setLoadingEditProfilePopup(true);
    api
      .setUserInfo({ name, about })
      .then((newData) => {
        setCurrentUser(newData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingEditProfilePopup(false);
      });
  }

  function handleUpdateAvatar(value) {
    setLoadingEditAvatarPopup(true);
    api
      .setNewAvatar(value)
      .then((newData) => {
        setCurrentUser(newData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingEditAvatarPopup(false);
      });
  }

  function handleAddPlaceSubmit({ name, link }) {
    setLoadingAddPlacePopup(true);
    api
      .addNewCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingAddPlacePopup(false);
      });
  }

  function handleCardDelete(deletingCard) {
    setLoadingConfirmationPopup(true);
    api
      .removeCard(deletingCard._id)
      .then(() => {
        setCards((state) => {
          return state.filter((card) => card._id !== deletingCard._id);
        });
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingConfirmationPopup(false);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          cards={cards}
          onCardDelete={handleConfirmation}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={loadingEditProfilePopup}
        />
        <AddPlacePopup
          isOpen={isOpenPlacePopup}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          isLoading={loadingAddPlacePopup}
        />
        <ConfirmationPopup
          isOpen={isOpenConfirmationPopup}
          onClose={closeAllPopups}
          isLoading={loadingConfirmationPopup}
          onCardDelete={handleCardDelete}
          deletingCard={deletingCard}
        />
        <EditAvatarPopup
          isOpen={isOpenAvatarPopup}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={loadingEditAvatarPopup}
        />
        <ImagePopup isOpen={isOpenSelectedCard} card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
