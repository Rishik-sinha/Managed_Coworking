import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook that triggers an animation every time the element
 * scrolls into the viewport. The `isVisible` flag resets when the
 * element leaves, so animations replay on every visit.
 *
 * @param {Object} options
 * @param {number} options.threshold – fraction of element visible to trigger (0-1)
 * @param {string} options.rootMargin – margin around root
 * @returns {{ ref, isVisible }}
 */
const useScrollAnimation = ({ threshold = 0.15, rootMargin = '0px' } = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        // Reset so animation replays next time element enters viewport
        setIsVisible(false);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold,
      rootMargin,
    });

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [callback, threshold, rootMargin]);

  return { ref, isVisible };
};

export default useScrollAnimation;
