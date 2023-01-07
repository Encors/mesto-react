export class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
    this._response = (res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      }
    };
  }

  getInitialCards() {
    return fetch(this._url + `/cards`, {
      headers: this._headers,
    }).then(this._response);
  }

  getProfileInfo() {
    return fetch(this._url + "/users/me", {
      headers: this._headers,
    }).then(this._response);
  }

  putProfileInfo(name, job) {
    return fetch(this._url + "/users/me", {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    }).then(this._response);
  }

  addNewCard(inputValues) {
    return fetch(this._url + "/cards", {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: inputValues.nameCard,
        link: inputValues.linkCard,
      }),
    }).then(this._response);
  }

  putLike(cardId) {
    return fetch(this._url + `/cards/${cardId}/likes`, {
      headers: this._headers,
      method: "PUT",
    }).then(this._response);
  }

  removeCard(cardId) {
    return fetch(this._url + `/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    }).then(this._response);
  }

  deleteLike(cardId) {
    return fetch(this._url + `/cards/${cardId}/likes`, {
      headers: this._headers,
      method: "DELETE",
    }).then(this._response);
  }

  setNewAvatar(inputValues) {
    return fetch(this._url + `/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        avatar: inputValues.avatar,
      }),
    }).then(this._response);
  }

  getAllNeededInfo() {
    return Promise.all([this.getProfileInfo(), this.getInitialCards()]);
  }
}

export const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/cohort-54",
  headers: {
    authorization: "50abc53f-8d3e-448b-b494-88b8f2ced152",
    "Content-Type": "application/json",
  },
});