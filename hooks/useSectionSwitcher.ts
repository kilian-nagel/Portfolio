import { useState, useEffect, useRef } from 'react';

interface Section {
  title: string;
  content: string;
}

function cubicBezier(p0, p1, p2, p3, t) {
  const u = 1 - t;
  return (u * u * u * p0) + (3 * u * u * t * p1) + (3 * u * t * t * p2) + (t * t * t * p3);
}

export function useSectionSwitcher(sections: Section[]) {
  const [counter, setCounter] = useState<number>(0);
  const [section, setSection] = useState<number>(0);
  const [isChanging, setIsChanging] = useState(false);
  const [animationState, setAnimationState] = useState(true); // State to control interval
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null); // Store interval ID

  useEffect(() => {
    if (animationState) {
      let start_time = performance.now();
      const time_interval = 10000;

      // Set interval when animationState is true
      intervalIdRef.current = setInterval(() => {
        let elapsed_time = performance.now() - start_time;

        if (elapsed_time >= time_interval - 500 && !isChanging) {
          // Trigger the blur animation shortly before the section change
          setIsChanging(true);
        }

        if (elapsed_time > time_interval) {
          setCounter(0);
          setSection((prevSection) => (prevSection + 1) % sections.length); // Cycle through sections
          start_time = performance.now();

          setTimeout(() => {
            setIsChanging(false);
          }, 500); // Animation duration
        } else {
          // Calculate progress (linear 0 to 1)
          let progress = elapsed_time / time_interval;

          // Apply cubic Bézier easing (slow start and slow end)
          let easedProgress = cubicBezier(0, 0.05, 0.95, 1, progress); // easeInOut curve
          let scaledProgress = Math.floor(easedProgress * 100);
          setCounter(scaledProgress);
        }
      }, 16); // 16ms ~ 60fps
    } else {
      // Clear interval if animationState is false
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    }

    // Clean up the interval on unmount or when animationState changes
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [sections, animationState]); // Effect depends on sections and animationState

  return {
    setSection,
    counter,
    section,
    isChanging,
    setAnimationState // Function to control the interval
  };
}
