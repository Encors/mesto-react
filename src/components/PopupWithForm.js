export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.classSelector} ${props.isOpen ? "popup_opened" : ""} `}>
      <div className="popup__container">
        <button className="popup__close-btn button" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.formName} noValidate>
          {props.children}
          <button className="popup__submit-btn button" type="submit">
            {props.submitBtnText}
          </button>
        </form>
      </div>
    </div>
  );
}
