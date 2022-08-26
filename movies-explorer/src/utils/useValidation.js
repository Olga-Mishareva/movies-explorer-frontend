import { useState } from 'react';

function useValidation() {
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);

  function checkErrors(e) {
    let object;
    if (e.target) object = e.target;
    else object = e;

    // console.log(object.validity)

    if (!object.validity.valid) {
      if (object.validity.patternMismatch) {
        object.name === 'search' ?
          setError({ ...error, [object.name]: 'Нужно ввести ключевое слово.' }) :
          setError({ ...error, [object.name]: 'Имя может содержать только буквы, пробел или дефис и должно быть не менее двух символов.' });
      }
      else {
        setError({ ...error, [object.name]: object.validationMessage });
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