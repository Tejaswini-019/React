// useLocalStorage.js
import { useState } from 'react';

function UseLocalStorage(key, initialValue) {

  const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;
  const [value, setValue] = useState(storedValue);
  const updateValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, updateValue];
}

export default UseLocalStorage;
