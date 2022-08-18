import { useState } from 'react';
import './FormInput.css';

function FormInput({ type, name, sort, label, minLength, maxLength, disabled, placeholder }) { 
  const [isInputValid, setIsInputValid] = useState(true);
  const [value, setValue] = useState({});

  function handleInputValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value});
  }

  function handleFocus(e) {
    e.target.select();
  }

  function checkInputValidity(e) {
    if (e.target.checkValidity()) {
      setIsInputValid(true);
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
        value={value[name] || ''} > 
      </input>
    </label>
  );
}

export default FormInput; 
