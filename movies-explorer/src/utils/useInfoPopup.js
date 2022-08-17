import { useState, useEffect } from "react";

function useInfoPopup() {
  const [isConfirm, setIsConfirm] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [error, setError] = useState('');

  function changeConfirm(state) {
    setIsConfirm(state);
    return isConfirm;
  }

  function changePopup(state) {
    setIsInfoPopupOpen(state);
    return isInfoPopupOpen;
  }

  function changeError(state) {
    setError(state);
    return error;
  }

  // console.log(isConfirm)
  // console.log(isInfoPopupOpen)
  // console.log(authError)

  // useEffect(() => {
    
  // }, [isConfirm, isInfoPopupOpen, authError]);
  

  return { isConfirm, isInfoPopupOpen, error, changeConfirm, changePopup, changeError }
}

export default useInfoPopup;