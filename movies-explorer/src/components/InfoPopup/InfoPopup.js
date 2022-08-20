import { useEffect } from "react";
import './InfoPopup.css';

function InfoPopup({ isConfirm, error, isOpen, onClose }) {
  // const [ authConfirm ] = isConfirm;
  const [ authError, profileError ] = error;
  const [ authPopup, profilePopup ] = isOpen;

  return (
    <div className={`popup popup_${authPopup || profilePopup ? 'opened' : ''}`}>
      <div className='popup__container'>
      <button className='popup__close-button' type='button' onMouseDown={onClose}></button>
        <div className={`popup__image popup__image_type_${isConfirm ? 'confirm' : 'reject'}`}></div>
        <h2 className='popup__message'>{isConfirm ? 'Вы успешно зарегистрированы.' : authError || profileError}</h2>
    </div>
   </div>
  ) 
}

export default InfoPopup;