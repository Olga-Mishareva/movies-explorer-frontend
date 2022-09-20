import { useState, useEffect } from 'react';

function UseLocalStorage(value, key) {
  const [storageValue, setStorageValue] = useState(getValue);

  function getValue() {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }
    return value;
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storageValue));
  }, [storageValue, key]);

  return [storageValue, setStorageValue];
}

export default UseLocalStorage;