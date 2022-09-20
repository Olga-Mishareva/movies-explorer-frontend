import { useState, useEffect } from 'react';
import { 
  FULL_SIZE, 
  DESCTOP, 
  TABLET, 
  FULL_SIZE_COUNT,
  DESCTOP_COUNT,
  TABLET_COUNT,
  MOBILE_COUNT,
  REGULAR_ROW,
  MOBILE_ROW 
} from '../constants/config';

function useResize() {
  const [count, setCount] = useState(0);
  const [row, setRow] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (width >= FULL_SIZE) {
      setCount(FULL_SIZE_COUNT);
      setRow(REGULAR_ROW);
      return;
    }
    else if (FULL_SIZE > width && width > DESCTOP) {
      setCount(DESCTOP_COUNT);
      setRow(REGULAR_ROW);
      return
    }
    else if (DESCTOP >= width && width > TABLET) {
      setCount(TABLET_COUNT);
      setRow(REGULAR_ROW);
      return
    }
    else  {
      setCount(MOBILE_COUNT)
      setRow(MOBILE_ROW);
      return
    }
  }, [width]);

  function handleResize() {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 2000);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
    window.removeEventListener('resize', handleResize);
    }
  }, [width]);

  return { width, count, row };
}

export default useResize;