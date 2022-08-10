import './FormInput.css';

function FormInput({ type, name, sort, label, minLength, maxLength, disabled }) { 


  function handleFocus(e) {
    e.target.select();
  }

  return (
    <label className={`form-input__label form-input__label_type_${sort}`}>{label}
      <input className={`form-input__input form-input__input_type_${sort} form-input__input_type_${''}`} 
        type={type} name={name} required minLength={minLength} maxLength={maxLength} placeholder=''
        disabled={disabled} onFocus={handleFocus}></input>  {/* value={} */}
    </label>
  );
}

export default FormInput; 
