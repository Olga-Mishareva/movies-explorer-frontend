import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { register, login, logout } from './MainApi';
import useInfoPopup from "./useInfoPopup";

function useAuth() {
  const { 
    isConfirm: authConfirm, 
    isInfoPopupOpen: authPopup, 
    error: authError, 
    changePopup: changeAuthPopup, 
    changeConfirm, 
    changeError 
  } = useInfoPopup();
  
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function handleRegister({ username, email, password }) {
    // console.log(username, email, password)
    register(username, email, password)
      .then(res => {
        // console.log(res)
        if (res._id) {
          changeConfirm(true);
          changeAuthPopup(true);
          setTimeout(() => changeAuthPopup(false), 2000);
          handleLogin({ email, password });
        }
        else {
          changeConfirm(false);
          changeAuthPopup(true);
        }
      })
      .catch(err => {
        changeError(err.message);
        changeConfirm(false);
        changeAuthPopup(true);
      }) 
  }

  function handleLogin({ email, password }) {
    // console.log(email, password)
    login(email, password) 
      .then(user => {
        if (user.email) {
          localStorage.setItem('email', email);
          checkAuth();
        }
      })
      .catch(err => {
        changeError(err.message);
        // setIsConfirm(false); // нужен ли он кроме как в регистр?
        changeAuthPopup(true);
      })
  }

  function checkAuth() {
    if (localStorage.getItem('email')) {
      // console.log(localStorage.getItem('email'))
      setLoggedIn(true);
      navigate('/movies');
    }
  }

  function handleLogout(email) {
    logout(email)
      .then(() => {
        localStorage.removeItem('email');
        // setLoggedUserData({});
        setLoggedIn(false);
        navigate('/');
      })
      .catch(err => {
        changeError(err.message);
        // setIsConfirm(false);
        changeAuthPopup(true);
      })
  }

  return { 
    loggedIn, 
    authConfirm, 
    authPopup, 
    authError, 
    checkAuth, 
    changeAuthPopup, 
    handleRegister, 
    handleLogin, 
    handleLogout 
  }
}

export default useAuth;