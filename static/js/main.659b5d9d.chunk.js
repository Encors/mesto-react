(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{3:function(e,t,a){},5:function(e,t,a){e.exports=a.p+"static/media/logo.7baba3c1.svg"},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),i=(a(3),a(8)),l=a(1),s=a(5),u=a.n(s);function p(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:u.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e"}))}var m=o.a.createContext();function d(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,r=e.onCardDelete,c=o.a.useContext(m),i=t.owner._id===c._id,l=t.likes.some(function(e){return e._id===c._id}),s="photo-card__like-btn button ".concat(l&&"photo-card__like-btn_active");return o.a.createElement("article",{className:"photo-card"},o.a.createElement("img",{className:"photo-card__photo",src:t.link,alt:t.name,onClick:function(){a(t)}}),i&&o.a.createElement("button",{className:"photo-card__remove-btn button",type:"button",onClick:function(){r(t)}}),o.a.createElement("div",{className:"photo-card__decription"},o.a.createElement("h2",{className:"photo-card__title"},t.name),o.a.createElement("div",{className:"photo-card__like-section"},o.a.createElement("button",{className:s,type:"button",onClick:function(){n(t)}}),o.a.createElement("span",{className:"photo-card__like-count"},t.likes.length))))}function f(e){var t=e.onEditProfile,a=e.onEditAvatar,n=e.onAddPlace,r=e.onCardClick,c=e.cards,i=e.onCardLike,l=e.onCardDelete,s=o.a.useContext(m);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__picture"},o.a.createElement("img",{src:s.avatar,className:"profile__avatar",alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),o.a.createElement("button",{onClick:a,className:"profile__picture-btn button",type:"button"})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__title"},s.name),o.a.createElement("p",{className:"profile__job"},s.about),o.a.createElement("button",{onClick:t,className:"profile__edit-btn button",type:"button"})),o.a.createElement("button",{onClick:n,className:"profile__add-btn button",type:"button"})),o.a.createElement("section",{className:"gallery","aria-label":"\u0421\u0435\u043a\u0446\u0438\u044f \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439"},c.map(function(e){return o.a.createElement(d,{key:e._id,card:e,onCardClick:r,onCardLike:i,onCardDelete:l})})))}function _(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 ",(new Date).getFullYear(),". \u0410\u043a\u0430\u0435\u0432\u0430 \u0414\u0438\u0430\u043d\u0430"))}function h(e){return o.a.createElement("div",{className:"popup popup_type_photo ".concat(e.isOpen?"popup_opened":""," "),onClick:e.onClose},o.a.createElement("div",{className:"popup__container-photo"},o.a.createElement("button",{className:"popup__close-btn button",type:"button"}),o.a.createElement("figure",{className:"popup__figure"},o.a.createElement("img",{className:"popup__photo",src:e.card.link,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0433\u043e\u0440\u043e\u0434\u0430: ".concat(e.card.cardName)}),o.a.createElement("figcaption",{className:"popup__caption"},e.card.name))))}var b=a(6),E=a(7),v=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(b.a)(this,e),this._url=a,this._headers=n,this._response=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}}return Object(E.a)(e,[{key:"_request",value:function(e,t){return fetch(e,t).then(this._response)}},{key:"getInitialCards",value:function(){return this._request(this._url+"/cards",{headers:this._headers})}},{key:"getUserInfo",value:function(){return this._request(this._url+"/users/me",{headers:this._headers})}},{key:"setUserInfo",value:function(e){var t=e.name,a=e.about;return this._request(this._url+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t,about:a})})}},{key:"addNewCard",value:function(e){var t=e.name,a=e.link;return this._request(this._url+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:t,link:a})})}},{key:"putLike",value:function(e){return this._request(this._url+"/cards/".concat(e,"/likes"),{headers:this._headers,method:"PUT"})}},{key:"removeCard",value:function(e){return this._request(this._url+"/cards/".concat(e),{headers:this._headers,method:"DELETE"})}},{key:"deleteLike",value:function(e){return this._request(this._url+"/cards/".concat(e,"/likes"),{headers:this._headers,method:"DELETE"})}},{key:"setNewAvatar",value:function(e){return this._request(this._url+"/users/me/avatar",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.avatar})})}},{key:"getAllStartedInfo",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}}]),e}())({baseUrl:"https://nomoreparties.co/v1/cohort-54",headers:{authorization:"50abc53f-8d3e-448b-b494-88b8f2ced152","Content-Type":"application/json"}});function C(e){var t=e.classSelector,a=e.isOpen,n=e.onClose,r=e.formName,c=e.title,i=e.submitBtnText,l=e.children,s=e.onSubmit;return o.a.createElement("div",{className:"popup popup_type_".concat(t," ").concat(a?"popup_opened":""," ")},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{className:"popup__close-btn button",type:"button",onClick:n}),o.a.createElement("h2",{className:"popup__title"},c),o.a.createElement("form",{className:"popup__form",name:r,onSubmit:s},l,o.a.createElement("button",{className:"popup__submit-btn button",type:"submit"},i))))}function g(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=e.isLoading,c=o.a.useContext(m),i=o.a.useState(""),s=Object(l.a)(i,2),u=s[0],p=s[1],d=o.a.useState(""),f=Object(l.a)(d,2),_=f[0],h=f[1];return o.a.useEffect(function(){p(c.name),h(c.about)},[c]),o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{classSelector:"edit-profile",formName:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitBtnText:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:u,about:_})}},o.a.createElement("input",{type:"text",className:"popup__input popup__input_type_name",placeholder:"\u0418\u043c\u044f",name:"nameProfile",id:"name-profile",required:!0,minLength:2,maxLength:40,value:u,onChange:function(e){p(e.target.value)}}),o.a.createElement("span",{id:"name-profile-error",className:"error"}),o.a.createElement("input",{type:"text",className:"popup__input popup__input_type_job",placeholder:"\u041e \u0441\u0435\u0431\u0435",name:"jobProfile",id:"job-profile",required:!0,minLength:2,maxLength:200,value:_,onChange:function(e){h(e.target.value)}}),o.a.createElement("span",{id:"job-profile-error",className:"error"})))}function N(e){var t=e.isOpen,a=e.onClose,r=e.onAddPlace,c=e.isLoading,i=Object(n.useRef)(""),l=Object(n.useRef)("");return o.a.createElement(C,{classSelector:"add-card",formName:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitBtnText:c?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),r({name:i.current.value,link:l.current.value})}},o.a.createElement("input",{type:"text",className:"popup__input popup__input_type_place-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"nameCard",id:"name-card",required:!0,minLength:2,maxLength:30,ref:i}),o.a.createElement("span",{id:"name-card-error",className:"error"}),o.a.createElement("input",{type:"url",className:"popup__input popup__input_type_img-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"linkCard",id:"link-card",required:!0,ref:l}),o.a.createElement("span",{id:"link-card-error",className:"error"}))}function k(e){var t=e.isOpen,a=e.onClose,r=e.onUpdateAvatar,c=e.isLoading,i=Object(n.useRef)("");return o.a.createElement(C,{classSelector:"set-avatar",formName:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitBtnText:c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),r({avatar:i.current.value})}},o.a.createElement("input",{type:"url",className:"popup__input popup__input_type_img-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"avatar",id:"link-avatar",required:!0,ref:i}),o.a.createElement("span",{id:"link-avatar-error",className:"error"}))}function O(e){var t=e.deletingCard,a=e.isOpen,n=e.onClose,r=e.isLoading,c=e.onCardDelete;return o.a.createElement(C,{isOpen:a,onClose:n,classSelector:"confirm",formName:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitBtnText:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0414\u0430",onSubmit:function(e){e.preventDefault(),c(t)}})}var y=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(l.a)(c,2),u=s[0],d=s[1],b=Object(n.useState)(!1),E=Object(l.a)(b,2),C=E[0],y=E[1],j=Object(n.useState)(!1),S=Object(l.a)(j,2),L=S[0],x=S[1],P=Object(n.useState)({}),T=Object(l.a)(P,2),q=T[0],A=T[1],D=Object(n.useState)({}),w=Object(l.a)(D,2),U=w[0],I=w[1],B=Object(n.useState)([]),F=Object(l.a)(B,2),J=F[0],R=F[1],H=Object(n.useState)(!1),z=Object(l.a)(H,2),M=z[0],Y=z[1],G=Object(n.useState)(!1),K=Object(l.a)(G,2),Q=K[0],V=K[1],W=Object(n.useState)(null),X=Object(l.a)(W,2),Z=X[0],$=X[1];function ee(){r(!1),d(!1),y(!1),x(!1),V(!1),$(null)}return Object(n.useEffect)(function(){v.getAllStartedInfo().then(function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];I(a),R(n)}).catch(function(e){console.log(e)})},[]),o.a.createElement(m.Provider,{value:U},o.a.createElement("div",{className:"page"},o.a.createElement(p,null),o.a.createElement(f,{onEditProfile:function(){d(!0)},onAddPlace:function(){y(!0)},onEditAvatar:function(){r(!0)},onCardClick:function(e){x(!0),A(e)},onCardLike:function(e){e.likes.some(function(e){return e._id===U._id})?v.deleteLike(e._id).then(function(t){R(function(a){return a.map(function(a){return a._id===e._id?t:a})})}).catch(function(e){console.log(e)}):v.putLike(e._id).then(function(t){R(function(a){return a.map(function(a){return a._id===e._id?t:a})})}).catch(function(e){console.log(e)})},cards:J,onCardDelete:function(e){V(!0),$(e)}}),o.a.createElement(_,null),o.a.createElement(g,{isOpen:u,onClose:ee,onUpdateUser:function(e){var t=e.name,a=e.about;Y(!0),v.setUserInfo({name:t,about:a}).then(function(e){I(e)}).then(ee).catch(function(e){console.log(e)}).finally(function(){Y(!1)})},isLoading:M}),o.a.createElement(N,{isOpen:C,onClose:ee,onAddPlace:function(e){var t=e.name,a=e.link;Y(!0),v.addNewCard({name:t,link:a}).then(function(e){R([e].concat(Object(i.a)(J)))}).then(ee).catch(function(e){console.log(e)}).finally(function(){Y(!1)})},isLoading:M}),o.a.createElement(O,{isOpen:Q,onClose:ee,isLoading:M,onCardDelete:function(e){Y(!0),v.removeCard(e._id).then(function(){R(J.filter(function(t){return t._id!==e._id}))}).then(ee).catch(function(e){console.log(e)}).finally(function(){Y(!1)})},deletingCard:Z}),o.a.createElement(k,{isOpen:a,onClose:ee,onUpdateAvatar:function(e){Y(!0),v.setNewAvatar(e).then(function(e){I(e)}).then(ee).catch(function(e){console.log(e)}).finally(function(){Y(!1)})},isLoading:M}),o.a.createElement(h,{isOpen:L,card:q,onClose:function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-btn"))&&ee()}})))},j=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,65)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null))),j()},9:function(e,t,a){e.exports=a(64)}},[[9,3,2]]]);
//# sourceMappingURL=main.659b5d9d.chunk.js.map