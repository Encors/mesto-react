import Card from "./Card";
import React, { useState, useEffect } from "react";
import { api } from "../utils/api";

export default function Main(props) {
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getInitialCards()])
      .then(([profileInfo, cards]) => {
        setUserName(profileInfo.name);
        setUserDescription(profileInfo.about);
        setUserAvatar(profileInfo.avatar);
        setCards(cards.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__picture">
          <img src={userAvatar} className="profile__avatar" alt="Фотография профиля" />
          <button onClick={props.onEditAvatar} className="profile__picture-btn button" type="button"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__job">{userDescription}</p>
          <button onClick={props.onEditProfile} className="profile__edit-btn button" type="button"></button>
        </div>
        <button onClick={props.onAddPlace} className="profile__add-btn button" type="button"></button>
      </section>
      <section className="gallery" aria-label="Секция фотографий">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}
