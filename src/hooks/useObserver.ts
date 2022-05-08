import { useEffect } from 'react';

const OBSERVER_OPTIONS = {
  rootMargin: '0px',
  threshold: 0.25,
};

const useObserver = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (isIntersect: boolean) => void
) => {
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    callback(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      observerCallback,
      OBSERVER_OPTIONS
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);
};

export default useObserver;
