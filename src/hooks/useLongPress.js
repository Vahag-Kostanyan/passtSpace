import { useState, useRef, useEffect } from 'react';

function useLongPress(callback, delay = 500) {
  const [isPressed, setIsPressed] = useState(false);
  const timerRef = useRef(null);

  const handleStart = () => {
    setIsPressed(true);
    timerRef.current = setTimeout(() => {
      if (isPressed) {
        callback();
      }
    }, delay);
  };

  const handleEnd = () => {
    setIsPressed(false);
    clearTimeout(timerRef.current);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return {
    onMouseDown: handleStart,
    onMouseUp: handleEnd,
    onTouchStart: handleStart,
    onTouchEnd: handleEnd,
  };
}

export default useLongPress;