import React from "react";

export default function ImagePopup({ isOpen, onClose, card }) {
  return (
    <div
      className={`popup popup_type_photo ${isOpen ? `popup_opened` : ""} `}
      onClick={onClose}
    >
      <div className="popup__container-photo">
        <button className="popup__close-btn button" type="button"></button>
        <figure className="popup__figure">
          <img
            className="popup__photo"
            src={card.link}
            alt={`Картинка города: ${card.cardName}`}
          />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}
