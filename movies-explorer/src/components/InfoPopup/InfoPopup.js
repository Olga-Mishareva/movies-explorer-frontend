import './InfoPopup.css';

function InfoPopup() {
  return (
    <div className='popup popup_opened'>
      <div className="popup__container">
      <button className="popup__close-button" type="button"></button>
        <div className="popup__image popup__image_type_confirm"></div> {/*  confirm / reject в зав. от сост. */}
        <h2 className='popup__message'>Вы успешно зарегистрированы.</h2>
    </div>
   </div>
  ) 
}

export default InfoPopup;