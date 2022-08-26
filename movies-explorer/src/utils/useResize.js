import { useState, useEffect } from 'react';

function useResize() {
  const [count, setCount] = useState(0);
  const [row, setRow] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (width > 1023) {
      setCount(4);
      setRow(4);
      return;
    }
    else if (1024 > width && width > 800) {
      setCount(3);
      setRow(4);
      return
    }
    else if (801 > width && width > 560) {
      setCount(2);
      setRow(4);
      return
    }
    else  {
      setCount(1)
      setRow(5);
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