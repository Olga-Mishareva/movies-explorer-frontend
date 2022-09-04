import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { register, login, logout, getUser, updateUser } from './MainApi';

function useAuth() {
  const { pathname } = useLocation();
  const [authConfirm, setAuthConfirm] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [authError, setAuthError] = useState('');
  
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

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
          setIsAuthPopupOpen(true);
        })
    }
  }, [loggedIn]);

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
    getUser()
        .then(() => {
          setLoggedIn(true);
          checkPath();
        })
        .catch(err => {
          setAuthError(err.message);
          setIsAuthPopupOpen(true);
        })
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

  function updateUserData({ name, email }) {
    updateUser(name, email)
      .then(data => {
        setCurrentUser({ ...currentUser,
          username: data.name, 
          email: data.email
        });
        setAuthConfirm(true);
        setIsAuthPopupOpen(true)
        setTimeout(() => {
          setIsAuthPopupOpen(false);
          setAuthConfirm(false);
        }, 2000);
      })
      .catch(err => {
        setAuthError(err.message);
        setAuthConfirm(false);
        setIsAuthPopupOpen(true);
      });
  }

  return { 
    loggedIn, 
    authConfirm, 
    isAuthPopupOpen, 
    authError,
    currentUser, 
    setIsAuthPopupOpen,
    handleRegister, 
    handleLogin, 
    handleLogout,
    updateUserData 
  };
}

export default useAuth;