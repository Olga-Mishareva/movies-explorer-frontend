import { useState } from 'react';

function useValidation() {
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);

  function checkErrors(e) {
    if (!e.target.checkValidity()) {
      if (e.target.validity.patternMismatch) {
        setError({ ...error, [e.target.name]: 'Имя может содержать только буквы, пробел или дефис и должно быть не менее двух символов.' });
      }
      else {
        setError({ ...error, [e.target.name]: e.target.validationMessage });
      }
      setIsValid(false);
    }
    else {
      setError({});
      setIsValid(true);
    }
  }

  return { error, isValid, setError, setIsValid, checkErrors };
}

export default useValidation;