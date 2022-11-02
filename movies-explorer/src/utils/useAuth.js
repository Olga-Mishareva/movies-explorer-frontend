import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import useFilmCollection from "./useFilmCollection";
import { register, login, logout, getUser, updateUser } from './MainApi';

function useAuth() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const [isConfirm, setIsConfirm] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [authError, setAuthError] = useState('');
  
  const [inputIsDisabled, setInputIsDisabled] = useState(false);
  const { getFilmsCollection } = useFilmCollection(setAuthError, setIsPopupOpen);
  
  useEffect(() => {
    checkAuth();
  },[]);

  useEffect(() => {
    if (loggedIn) {
      getUser()
        .then(user => {
          setCurrentUser({
            _id: user._id, 
            username: user.name, 
            email: user.email
          });
          checkPath();
        })
        .catch(err => {
          setAuthError(err.message);
          setIsPopupOpen(true);
        })
    }
  }, [loggedIn]);

  //--------------------------------------------------------//

  function handleRegister({ username, email, password }) {
    setInputIsDisabled(true);
    register(username, email, password)
      .then(res => {
        if (res._id) {
          setIsConfirm(true);
          setIsPopupOpen(true);
          setTimeout(() => {
            setIsPopupOpen(false);
            setIsConfirm(false);
          }, 2000);
          handleLogin({ email, password });
        }
        else {
          setIsConfirm(false);
          setIsPopupOpen(true);
        }
      })
      .catch(err => {
        setAuthError(err.message);
        setIsConfirm(false);
        setIsPopupOpen(true);
      })
      .finally(() => setInputIsDisabled(false));
  }

  function handleLogin({ email, password }) {
    setInputIsDisabled(true);
    login(email, password) 
      .then(user => {
        if (user.email) {
          localStorage.setItem('email', user.email);
          checkAuth();
          getFilmsCollection();
          navigate('/movies');
        }
      })
      .catch(err => {
        setAuthError(err.message);
        setIsPopupOpen(true);
      })
      .finally(() => setInputIsDisabled(false));
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
        setIsPopupOpen(true);
      });
  }

  //--------------------------------------------------------// 

  function updateUserData({ name, email }) {
    setInputIsDisabled(true);
    updateUser(name, email)
      .then(data => {
        setCurrentUser({ ...currentUser,
          username: data.name, 
          email: data.email
        });
        localStorage.setItem('email', data.email);
        setIsConfirm(true);
        setIsPopupOpen(true)
        setTimeout(() => {
          setIsPopupOpen(false);
          setIsConfirm(false);
        }, 2000);
      })
      .catch(err => {
        setAuthError(err.message);
        setIsConfirm(false);
        setIsPopupOpen(true);
      })
      .finally(() => setInputIsDisabled(false));
  }

  //--------------------------------------------------------//

  function checkAuth() {
    if (localStorage.getItem('email')) {
      getUser()
        .then(() => {
          setLoggedIn(true);
          checkPath();
        })
        .catch(err => {
          localStorage.removeItem('email');
          setAuthError(err.message);
          setIsPopupOpen(true);
        })
    } 
  }

  function checkPath() {
    if (pathname === '/signup' || pathname === '/signin') {
      navigate('/movies');
    }
    else {
      navigate(pathname);
    }
  }

  return { 
    loggedIn, 
    isConfirm, 
    isPopupOpen, 
    authError,
    currentUser,
    inputIsDisabled,
    setAuthError,
    setIsPopupOpen,
    handleRegister, 
    handleLogin, 
    handleLogout,
    updateUserData 
  };
}

export default useAuth;