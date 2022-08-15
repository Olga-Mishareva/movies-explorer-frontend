import { useState } from 'react';

function useValidation() {
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);

  function checkErrors(e) {
    if (!e.currentTarget.checkValidity()) {
      if (e.target.validity.patternMismatch) {
        setError({ ...error, [e.target.name]: 'Имя может содержать только буквы, пробел или дефис.' });
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

  return { error, isValid, checkErrors };
}

export default useValidation;