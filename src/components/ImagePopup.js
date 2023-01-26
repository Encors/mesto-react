import React from "react";

export default function ImagePopup(props) {
  return (
    <div className={`popup popup_type_photo ${props.isOpen ? `popup_opened` : ""} `} onClick={props.onClose}>
      <div className="popup__container-photo">
        <button className="popup__close-btn button" type="button"></button>
        <figure className="popup__figure">
          <img className="popup__photo" src={props.card.link} alt={`Картинка города: ${props.card.cardName}`} />
          <figcaption className="popup__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}
