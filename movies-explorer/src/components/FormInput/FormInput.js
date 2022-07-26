import { useState} from 'react';
import { isEmail } from 'validator';
import { USER_NAME_REGEX } from '../../constants/config';
import './FormInput.css';

function FormInput({
  type, 
  name, 
  sort, 
  label, 
  minLength, 
  maxLength, 
  isDisabled, 
  placeholder, 
  setUserData 
  }) { 
    
  const [isInputValid, setIsInputValid] = useState(true);
  const [value, setValue] = useState({});

  function handleInputValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
    if (e.target.type === 'email' && isEmail(e.target.value)) {
      setIsInputValid(true);
      setUserData(e.target.name, e.target.value);
    }
    else if (e.target.type !== 'email' && e.target.checkValidity()) {
      setIsInputValid(true);
      setUserData(e.target.name, e.target.value);
    }
    else {
      setIsInputValid(false);
    }
  }

  function handleFocus(e) {
    e.target.select();
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
        disabled={isDisabled} 
        onFocus={handleFocus} 
        onChange={handleInputValue}
        value={value[name] || ''}
        pattern={name === 'username' ? USER_NAME_REGEX : null} > 
      </input>
    </label>
  );
}

export default FormInput; 
