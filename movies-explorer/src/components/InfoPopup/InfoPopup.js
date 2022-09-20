import { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import useEscapeClick from '../../utils/useEscapeClick';
import './InfoPopup.css';

function InfoPopup({ isConfirm, error, isOpen, onClose }) {
  const [currentError, setCurrentError] = useState('');
  const [ setIsAuthPopupOpen, setIsMoviePopupOpen ] = onClose;
  const { pathname } = useLocation();
  const popupIsOpen = isOpen.some(item => item);
  const [ lang ] = useContext(LanguageContext);
  
  useEscapeClick(popupIsOpen, closeInfoPopups);

  function handleError() {
    error.forEach(err => {
      if (err.includes('400')) return lang.badRequestErr;
      if (err.includes('403')) return lang.forbiddenErr;
      if (err.includes('409')) return lang.conflictErr;
      if (err.includes('400')) return lang.badRequestErr;
      if (err.includes('401') && pathname === '/singin') return lang.authErr;
      if (err.includes('401') && pathname !== ('/singin' || '/singup')) return lang.unauthorized;
    })
  }

  useEffect(() => {
    setCurrentError(handleError());
  }, [error]);
  
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
          {isConfirm && pathname === '/profile' ? lang.isDataChanged
            : isConfirm && (pathname === '/signup' || '/') ? lang.isSignup
            : currentError}</h2>
    </div>
   </div>
  ) 
}

export default InfoPopup;