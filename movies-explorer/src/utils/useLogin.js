import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { register, login, logout } from './MainApi';

function useLogin() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [authError, setAuthError] = useState('');
  const [loggedUserData, setLoggedUserData] = useState({});
  const navigate = useNavigate();
  
  // const currentUser = useContext(CurrentUserContext);

  function handleRegister({ username, email, password }) {
    console.log(username, email, password)
    register(username, email, password)
      .then(res => {
        console.log(res)
        if (res._id) {
          setIsConfirm(true);
          setIsInfoPopupOpen(true);
          setTimeout(() => setIsInfoPopupOpen(false), 2000);
          navigate('/signin');
        }
        else {
          setIsConfirm(false);
          setIsInfoPopupOpen(true);
        }
      })
      .catch(err => {
        setAuthError(err.message);
        setIsConfirm(false);
        setIsInfoPopupOpen(true);
      })
  }

  function handleLogin({ email, password }) {
    login(email, password) 
      .then(user => {
        if (user.email) {
          const { name, email, _id } = user;
          localStorage.setItem('email', email);
          setLoggedUserData({ name, email, _id });
          checkAuth();
        }
      })
      .catch(err => {
        setAuthError(err.message);
        setIsConfirm(false);
        setIsInfoPopupOpen(true);
      })
  }

  function checkAuth() {
    if (localStorage.getItem('email')) {
      console.log(localStorage.getItem('email'))
      setLoggedIn(true);
      navigate('/');
    }
  }

  function handleLogout(email) {
    logout(email)
      .then(() => {
        localStorage.removeItem('email');
        setLoggedUserData({});
        setLoggedIn(false);
        navigate('/');
      })
      .catch(err => {
        setAuthError(err.message);
        setIsConfirm(false);
        setIsInfoPopupOpen(true);
      })
  }

  return { loggedIn, loggedUserData, checkAuth, isConfirm, isInfoPopupOpen, setIsInfoPopupOpen, authError, handleRegister, handleLogin, handleLogout }
}

export default useLogin;