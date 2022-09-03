import { useLocation } from 'react-router-dom';
import './InfoPopup.css';

function InfoPopup({ isConfirm, error, isOpen, onClose }) {
  const [ authError, movieError ] = error;
  const { pathname } = useLocation();
  const popupIsOpen = isOpen.some(item => item);

  return (
    <div className={`popup popup_${popupIsOpen ? 'opened' : ''}`}>
      <div className='popup__container'>
      <button className='popup__close-button' type='button' onMouseDown={onClose}></button>
        <div className={`popup__image popup__image_type_${isConfirm ? 'confirm' : 'reject'}`}></div>
        <h2 className='popup__message'>
          {pathname === '/profile' ? 'Ваши данные успешно изменены.' 
            : pathname === '/signup' || '/' ? 'Вы успешно зарегистрированы.'
            : authError || movieError}</h2>
    </div>
   </div>
  ) 
}

export default InfoPopup;