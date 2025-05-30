import { useEffect, useState } from 'react';

const getNewPercent = () =>
  Math.ceil(
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
      100,
  ) + '%';

export const useProgress = () => {
  const [progress, setProgress] = useState('0%');

  useEffect(() => {
    const scrollHandler = () => setProgress(getNewPercent());
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return progress;
};
