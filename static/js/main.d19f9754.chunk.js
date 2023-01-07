(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{3:function(e,t,a){},5:function(e,t,a){e.exports=a.p+"static/media/logo.7baba3c1.svg"},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),s=(a(3),a(1)),l=a(5),i=a.n(l);function p(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:i.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e"}))}function u(e){return r.a.createElement("article",{className:"photo-card"},r.a.createElement("img",{className:"photo-card__photo",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),r.a.createElement("button",{className:"photo-card__remove-btn button",type:"button"}),r.a.createElement("div",{className:"photo-card__decription"},r.a.createElement("h2",{className:"photo-card__title"},e.card.name),r.a.createElement("div",{className:"photo-card__like-section"},r.a.createElement("button",{className:"photo-card__like-btn button",type:"button"}),r.a.createElement("span",{className:"photo-card__like-count"},e.card.likes.length))))}var m=a(6),d=a(7),_=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(m.a)(this,e),this._url=a,this._headers=n,this._response=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}}return Object(d.a)(e,[{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{headers:this._headers}).then(this._response)}},{key:"getProfileInfo",value:function(){return fetch(this._url+"/users/me",{headers:this._headers}).then(this._response)}},{key:"putProfileInfo",value:function(e,t){return fetch(this._url+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e,about:t})}).then(this._response)}},{key:"addNewCard",value:function(e){return fetch(this._url+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:e.nameCard,link:e.linkCard})}).then(this._response)}},{key:"putLike",value:function(e){return fetch(this._url+"/cards/".concat(e,"/likes"),{headers:this._headers,method:"PUT"}).then(this._response)}},{key:"removeCard",value:function(e){return fetch(this._url+"/cards/".concat(e),{headers:this._headers,method:"DELETE"}).then(this._response)}},{key:"deleteLike",value:function(e){return fetch(this._url+"/cards/".concat(e,"/likes"),{headers:this._headers,method:"DELETE"}).then(this._response)}},{key:"setNewAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.avatar})}).then(this._response)}},{key:"getAllNeededInfo",value:function(){return Promise.all([this.getProfileInfo(),this.getInitialCards()])}}]),e}())({baseUrl:"https://nomoreparties.co/v1/cohort-54",headers:{authorization:"50abc53f-8d3e-448b-b494-88b8f2ced152","Content-Type":"application/json"}});function h(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),p=i[0],m=i[1],d=Object(n.useState)(""),h=Object(s.a)(d,2),f=h[0],b=h[1],E=Object(n.useState)([]),N=Object(s.a)(E,2),v=N[0],k=N[1];return Object(n.useEffect)(function(){Promise.all([_.getProfileInfo(),_.getInitialCards()]).then(function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];m(a.name),b(a.about),c(a.avatar),k(n),n.reverse()}).catch(function(e){console.log(e)})},[]),r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__picture"},r.a.createElement("img",{src:o,className:"profile__avatar",alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),r.a.createElement("button",{onClick:e.onEditAvatar,className:"profile__picture-btn button",type:"button"})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("h1",{className:"profile__title"},p),r.a.createElement("p",{className:"profile__job"},f),r.a.createElement("button",{onClick:e.onEditProfile,className:"profile__edit-btn button",type:"button"})),r.a.createElement("button",{onClick:e.onAddPlace,className:"profile__add-btn button",type:"button"})),r.a.createElement("section",{className:"gallery","aria-label":"\u0421\u0435\u043a\u0446\u0438\u044f \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439"},v.map(function(t){return r.a.createElement(u,{key:t._id,card:t,onCardClick:e.onCardClick})})))}function f(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2022. \u0410\u043a\u0430\u0435\u0432\u0430 \u0414\u0438\u0430\u043d\u0430"))}function b(e){return r.a.createElement("div",{className:"popup popup_type_".concat(e.classSelector," ").concat(e.isOpen?"popup_opened":""," ")},r.a.createElement("div",{className:"popup__container"},r.a.createElement("button",{className:"popup__close-btn button",type:"button",onClick:e.onClose}),r.a.createElement("h2",{className:"popup__title"},e.title),r.a.createElement("form",{className:"popup__form",name:e.formName,noValidate:!0},e.children,r.a.createElement("button",{className:"popup__submit-btn button",type:"submit"},e.submitBtnText))))}function E(e){return r.a.createElement("div",{className:"popup popup_type_photo ".concat(e.isOpen?"popup_opened":""," "),onClick:e.onClose},r.a.createElement("div",{className:"popup__container-photo"},r.a.createElement("button",{className:"popup__close-btn button",type:"button"}),r.a.createElement("figure",{className:"popup__figure"},r.a.createElement("img",{className:"popup__photo",src:e.card.link,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0433\u043e\u0440\u043e\u0434\u0430: ".concat(e.card.cardName)}),r.a.createElement("figcaption",{className:"popup__caption"},e.card.name))))}var N=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),l=Object(s.a)(c,2),i=l[0],u=l[1],m=Object(n.useState)(!1),d=Object(s.a)(m,2),_=d[0],N=d[1],v=Object(n.useState)(!1),k=Object(s.a)(v,2),g=k[0],y=k[1],C=Object(n.useState)({}),O=Object(s.a)(C,2),j=O[0],S=O[1];function P(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-btn"))&&(o(!1),u(!1),N(!1),y(!1))}return r.a.createElement("div",{className:"page"},r.a.createElement(p,null),r.a.createElement(h,{onEditProfile:function(){u(!0)},onAddPlace:function(){N(!0)},onEditAvatar:function(){o(!0)},onCardClick:function(e){y(!0),S(e)}}),r.a.createElement(f,null),r.a.createElement(b,{classSelector:"edit-profile",formName:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitBtnText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:i,onClose:P},r.a.createElement("input",{type:"text",className:"popup__input popup__input_type_name",placeholder:"\u0418\u043c\u044f",name:"nameProfile",id:"name-profile",required:!0,minLength:2,maxLength:40}),r.a.createElement("span",{id:"name-profile-error",className:"error"}),r.a.createElement("input",{type:"text",className:"popup__input popup__input_type_job",placeholder:"\u041e \u0441\u0435\u0431\u0435",name:"jobProfile",id:"job-profile",required:!0,minLength:2,maxLength:200}),r.a.createElement("span",{id:"job-profile-error",className:"error"})),r.a.createElement(b,{classSelector:"add-card",formName:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitBtnText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:_,onClose:P},r.a.createElement("input",{type:"text",className:"popup__input popup__input_type_place-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"nameCard",id:"name-card",required:!0,minLength:2,maxLength:30}),r.a.createElement("span",{id:"name-card-error",className:"error"}),r.a.createElement("input",{type:"url",className:"popup__input popup__input_type_img-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"linkCard",id:"link-card",required:!0}),r.a.createElement("span",{id:"link-card-error",className:"error"})),r.a.createElement(b,{classSelector:"confirm",formName:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitBtnText:"\u0414\u0430",onClose:P}),r.a.createElement(b,{classSelector:"set-avatar",formName:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitBtnText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:P},r.a.createElement("input",{type:"url",className:"popup__input popup__input_type_img-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"avatar",id:"link-avatar",required:!0}),r.a.createElement("span",{id:"link-avatar-error",className:"error"})),r.a.createElement(E,{isOpen:g,card:j,onClose:P}))},v=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,64)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null))),v()},8:function(e,t,a){e.exports=a(63)}},[[8,3,2]]]);
//# sourceMappingURL=main.d19f9754.chunk.js.map