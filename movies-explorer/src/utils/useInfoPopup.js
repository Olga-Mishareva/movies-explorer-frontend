import { useState } from "react";

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

  return { isConfirm, isInfoPopupOpen, error, changeConfirm, changePopup, changeError };
}

export default useInfoPopup;