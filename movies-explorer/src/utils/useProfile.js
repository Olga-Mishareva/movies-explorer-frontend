import { useEffect } from "react";
import useInfoPopup from "./useInfoPopup";
import { getUser, updateUser } from './MainApi';

function useProfile() {
  const { 
    isConfirm: profileConfirm, 
    isInfoPopupOpen: profilePopup, 
    error: profileError, 
    changePopup: changeProfilePopup, 
    changeConfirm, 
    changeError 
  } = useInfoPopup();

 
  function getLoggedUser() {
    getUser()
      .then(user => {
        // console.log(user)
        return user;
      })
  }

  return { getLoggedUser };
}

export default useProfile;