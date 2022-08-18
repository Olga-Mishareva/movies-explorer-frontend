import { useState } from "react";

function useValidation(input, errorMessage) {
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);

  function checkErrors(e) {
    if (!e.currentTarget.checkValidity()) {
      setError({ ...error, [e.target.name]: e.target.validationMessage });
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