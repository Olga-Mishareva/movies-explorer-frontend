import './InfoPopup.css';

function InfoPopup({ isConfirm, error, isOpen, onClose }) {
  const [ authConfirm, profileConfirm ] = isConfirm;
  const [ authError, profileError, movieError ] = error;
  // console.log(authConfirm, profileConfirm)

  const confirm = isConfirm.some(item => item);
  const popupIsOpen = isOpen.some(item => item);
  // console.log(confirm)

  return (
    <div className={`popup popup_${popupIsOpen ? 'opened' : ''}`}>
      <div className='popup__container'>
      <button className='popup__close-button' type='button' onMouseDown={onClose}></button>
        <div className={`popup__image popup__image_type_${confirm ? 'confirm' : 'reject'}`}></div>
        <h2 className='popup__message'>
          {profileConfirm ? 'Ваши данные успешно изменены.' 
            : authConfirm ? 'Вы успешно зарегистрированы.'
            : authError || profileError || movieError}</h2>
    </div>
   </div>
  ) 
}

export default InfoPopup;