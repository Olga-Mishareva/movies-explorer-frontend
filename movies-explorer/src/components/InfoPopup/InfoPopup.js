import { useEffect } from "react";
import useLogin from '../../utils/useLogin';
import './InfoPopup.css';

function InfoPopup({ isConfirm, authError, isOpen, onClose }) {
  

  return (
    <div className={`popup popup_${isOpen ? 'opened' : ''}`}>
      <div className='popup__container'>
      <button className='popup__close-button' type='button' onMouseDown={onClose}></button>
        <div className={`popup__image popup__image_type_${isConfirm ? 'confirm' : 'reject'}`}></div>
        <h2 className='popup__message'>{isConfirm ? 'Вы успешно зарегистрированы.' : authError}</h2>
    </div>
   </div>
  ) 
}

export default InfoPopup;