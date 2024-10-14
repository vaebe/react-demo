import { useEffect, useRef } from 'react';

export interface UseTimerProps {
    id: number;
    duration?: number;
    remove?: (id: number) => void;
}

export function useTimer(props: UseTimerProps) {
  const { remove, id, duration = 2000 } = props;

  const timer = useRef<number | null>(null);

  const removeTimer = () => {
    if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
    }
  };

  const startTimer = () => {
    // 调用前先尝试清除定时器
    removeTimer()

    timer.current = window.setTimeout(() => {
      remove && remove(id);
      removeTimer();
    }, duration);
  };

  useEffect(() => {
    startTimer();
    return () => removeTimer();
  }, []);

  const onMouseEnter = () => {
    removeTimer();
  };

  const onMouseLeave = () => {
    startTimer();
  };

  return {
    onMouseEnter,
    onMouseLeave,
  };
}