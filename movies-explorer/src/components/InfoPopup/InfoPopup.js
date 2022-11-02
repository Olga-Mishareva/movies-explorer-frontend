import { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import useEscapeClick from '../../utils/useEscapeClick';
import './InfoPopup.css';

function InfoPopup({ isConfirm, errors, isOpen, onClose }) {
  const [currentError, setCurrentError] = useState('xcx');
  const [ setIsAuthPopupOpen, setIsMoviePopupOpen ] = onClose;
  const { pathname } = useLocation();
  const popupIsOpen = isOpen.some(item => item);
  const [ lang ] = useContext(LanguageContext);
  
  useEscapeClick(popupIsOpen, closeInfoPopups);

  function handleError() {
    let error = '';
    errors.forEach(err => {
      if (err !== '') {
        if (err.includes('400')) error = lang.badRequestErr;
        else if (err.includes('403')) error = lang.forbiddenErr;
        else if (err.includes('409')) error = lang.conflictErr; 
        else if (err.includes('400')) error = lang.badRequestErr;
        else if (err.includes('401') && pathname === '/signin') error = lang.authErr;
        else if (err.includes('401') && pathname !== ('/signin' || '/signup')) error = lang.unauthorized;
      } 
    });
    return error;
  }

  useEffect(() => {
    setCurrentError(handleError());    
  }, [errors]);
  
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