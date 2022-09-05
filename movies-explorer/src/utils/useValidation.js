import { useState } from 'react';
import { isEmail } from 'validator';

function useValidation() {
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);

  function checkErrors(e) {
    let object;
    object = (e.target) ?  e.target : e;

    if (object.type === 'email' && !isEmail(object.value)) {
      setError({ ...error, [object.name]: 'Неверный формат электронной почты.' });
      setIsValid(false);
    }
    else if (!object.validity.valid) {
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