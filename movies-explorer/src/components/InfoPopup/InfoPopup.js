import { useEffect } from "react";
import './InfoPopup.css';

function InfoPopup({ isConfirm, error, isOpen, onClose }) {
  const [ authConfirm ] = isConfirm;
  const [ authError ] = error;
  const [ authPopup ] = isOpen;

  return (
    <div className={`popup popup_${authPopup ? 'opened' : ''}`}>
      <div className='popup__container'>
      <button className='popup__close-button' type='button' onMouseDown={onClose}></button>
        <div className={`popup__image popup__image_type_${authConfirm ? 'confirm' : 'reject'}`}></div>
        <h2 className='popup__message'>{authConfirm ? 'Вы успешно зарегистрированы.' : authError}</h2>
    </div>
   </div>
  ) 
}

export default InfoPopup;