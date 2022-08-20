import { useState, useContext } from 'react';
import { userNameRegex } from '../../constants/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './FormInput.css';

function FormInput({ type, name, sort, label, minLength, maxLength, disabled, placeholder, setUserData, isValid }) { 
  const currentUser = useContext(CurrentUserContext);
  const [isInputValid, setIsInputValid] = useState(true);
  const [value, setValue] = useState({});

  function handleInputValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  function handleFocus(e) {
    e.target.select();
  }

  function checkInputValidity(e) {
    if (e.target.checkValidity()) {
      setIsInputValid(true);
      setUserData(e.target.name, e.target.value);
    }
    else {
      setIsInputValid(false);
    }
  }

  return (
    <label className={`form-input__label form-input__label_type_${sort}`}>{label}
      <input className={`form-input__input form-input__input_type_${sort}
        form-input__input_type_${isInputValid ? '' : 'error'}`} 
        type={type} 
        name={name} 
        required 
        minLength={minLength} 
        maxLength={maxLength} 
        placeholder={placeholder}
        disabled={disabled} 
        onFocus={handleFocus} 
        onChange={handleInputValue}
        onInput={checkInputValidity}
        value={(sort === 'profile' ? currentUser[name] : value[name]) || ''}
        pattern={name === 'username' ? userNameRegex : null} > 
      </input>
    </label>
  );
}

export default FormInput; 
