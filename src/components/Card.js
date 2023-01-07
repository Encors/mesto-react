import React from 'react';

export default function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="photo-card">
      <img className="photo-card__photo" src={props.card.link} alt={props.card.name} onClick={handleCardClick} />
      <button className="photo-card__remove-btn button" type="button"></button>
      <div className="photo-card__decription">
        <h2 className="photo-card__title">{props.card.name}</h2>
        <div className="photo-card__like-section">
          <button className="photo-card__like-btn button" type="button"></button>
          <span className="photo-card__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}
