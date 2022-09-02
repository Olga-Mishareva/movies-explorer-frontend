import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { register, login, logout } from './MainApi';

function useAuth() {
  const { pathname } = useLocation();
  const [authConfirm, setAuthConfirm] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [authError, setAuthError] = useState('');
  
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function handleRegister({ username, email, password }) {
    register(username, email, password)
      .then(res => {
        if (res._id) {
          setAuthConfirm(true);
          setIsAuthPopupOpen(true);
          setTimeout(() => {
            setIsAuthPopupOpen(false);
            setAuthConfirm(false);
          }, 2000);
          handleLogin({ email, password });
        }
        else {
          setAuthConfirm(false);
          setIsAuthPopupOpen(true);
        }
      })
      .catch(err => {
        setAuthError(err.message);
        setAuthConfirm(false);
        setIsAuthPopupOpen(true);
      });
  }

  function handleLogin({ email, password }) {
    login(email, password) 
      .then(user => {
        if (user.email) {
          localStorage.setItem('email', email);
          checkAuth();
          navigate('/movies');
        }
      })
      .catch(err => {
        setAuthError(err.message);
        setIsAuthPopupOpen(true);
      });
  }

  function checkAuth() {
    if (localStorage.getItem('email')) {
      setLoggedIn(true);
    }
  }

  function checkPath() {
    if (pathname === '/signup' || pathname === '/signin') {
      navigate('/');
    }
    else {
      navigate(pathname);
    }
  }

  function handleLogout(email) {
    logout(email)
      .then(() => {
        localStorage.clear();
        setLoggedIn(false);
        navigate('/');
      })
      .catch(err => {
        setAuthError(err.message);
        setIsAuthPopupOpen(true);
      });
  }

  return { 
    loggedIn, 
    authConfirm, 
    isAuthPopupOpen, 
    authError, 
    setIsAuthPopupOpen,
    checkAuth,
    checkPath, 
    handleRegister, 
    handleLogin, 
    handleLogout 
  };
}

export default useAuth;