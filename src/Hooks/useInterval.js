import { useEffect } from 'react';

let interval;
function useInterval(callback, time) {
  useEffect(() => {
    interval = setInterval(callback, time);
    return () => clearInterval(interval);
  }, []);
}

export default useInterval;