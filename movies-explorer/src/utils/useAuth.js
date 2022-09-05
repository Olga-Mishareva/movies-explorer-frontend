import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { getAllMovies } from './MoviesApi';
import useLocalStorage from './useLocalStorage';
import { register, login, logout, getUser, updateUser } from './MainApi';

function useAuth() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [filmsCollection, setFilmsCollection] = useLocalStorage([], 'collection');
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const [isConfirm, setIsConfirm] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  

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
      });
  }

  function handleLogin({ email, password }) {
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
      });
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
      });
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
          setAuthError(err.message);
          setIsPopupOpen(true);
        })
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

//--------------------------------------------------------//

  function getFilmsCollection() {
    setIsLoading(true);
    getAllMovies()
    .then(data => {
      setFilmsCollection(data);
    })
    .catch(err => {
      setAuthError(err.message);
      setIsPopupOpen(true);
    })
    .finally(() => setIsLoading(false));
  }

  return { 
    loggedIn, 
    isConfirm, 
    isPopupOpen, 
    authError,
    currentUser,
    filmsCollection,
    isLoading, 
    setIsPopupOpen,
    handleRegister, 
    handleLogin, 
    handleLogout,
    updateUserData 
  };
}

export default useAuth;