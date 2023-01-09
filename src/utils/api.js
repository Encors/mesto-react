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

  _request(url, options) {
    return fetch(url, options).then(this._response);
  }

  getInitialCards() {
    return this._request(this._url + `/cards`, {
      headers: this._headers,
    });
  }

  getProfileInfo() {
    return this._request(this._url + "/users/me", {
      headers: this._headers,
    });
  }

  putProfileInfo(name, job) {
    return this._request(this._url + "/users/me", {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    });
  }

  addNewCard(inputValues) {
    return this._request(this._url + "/cards", {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: inputValues.nameCard,
        link: inputValues.linkCard,
      }),
    });
  }

  putLike(cardId) {
    return this._request(this._url + `/cards/${cardId}/likes`, {
      headers: this._headers,
      method: "PUT",
    });
  }

  removeCard(cardId) {
    return this._request(this._url + `/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    });
  }

  deleteLike(cardId) {
    return this._request(this._url + `/cards/${cardId}/likes`, {
      headers: this._headers,
      method: "DELETE",
    });
  }

  setNewAvatar(inputValues) {
    return this._request(this._url + `/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        avatar: inputValues.avatar,
      }),
    });
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
