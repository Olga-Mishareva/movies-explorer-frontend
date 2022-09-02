import { useEffect, useState } from "react";

function useInfoPopup() {
  const [isConfirm, setIsConfirm] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   setIsConfirm(confirm);
  //   return isConfirm;
  // }, [isConfirm]);

  // useEffect(() => {
  //   setIsInfoPopupOpen(popupState);
  //   return isInfoPopupOpen;
  // }, [isInfoPopupOpen]);

  // useEffect(() => {
  //   setError(err);
  //   return error;
  // }, [error]);

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

  
  return { isConfirm, isInfoPopupOpen, error, changeConfirm, changePopup, changeError };
}

export default useInfoPopup;