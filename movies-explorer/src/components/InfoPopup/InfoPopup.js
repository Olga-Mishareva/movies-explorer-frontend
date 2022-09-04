import { useLocation } from 'react-router-dom';
import useEscapeClick from '../../utils/useEscapeClick';
import './InfoPopup.css';

function InfoPopup({ isConfirm, error, isOpen, onClose }) {
  const [ setIsAuthPopupOpen, setIsMoviePopupOpen ] = onClose;
  const [ authError, movieError ] = error;
  const { pathname } = useLocation();
  const popupIsOpen = isOpen.some(item => item);

  useEscapeClick(popupIsOpen, closeInfoPopups);

  function closeInfoPopups() {
    setIsAuthPopupOpen(false);
    setIsMoviePopupOpen(false);
  }

  return (
    <div className={`popup popup_${popupIsOpen ? 'opened' : ''}`} onMouseDown={closeInfoPopups}>
      <div className='popup__container' onMouseDown={(e) => e.stopPropagation()}>
        <button className='popup__close-button' type='button' onMouseDown={closeInfoPopups}></button>
        <div className={`popup__image popup__image_type_${isConfirm ? 'confirm' : 'reject'}`}></div>
        <h2 className='popup__message'>
          {isConfirm && pathname === '/profile' ? 'Ваши данные успешно изменены.' 
            : isConfirm && (pathname === '/signup' || '/') ? 'Вы успешно зарегистрированы.'
            : authError || movieError}</h2>
    </div>
   </div>
  ) 
}

export default InfoPopup;