import { useState, useEffect } from 'react';
import { EN, RU } from '../../constants/languages';

function useLang() {
  const [lang, setLang] = useState(EN);

  return lang;
}

export default useLang;