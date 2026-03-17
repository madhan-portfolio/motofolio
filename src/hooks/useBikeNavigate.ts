import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useBikeNavigate = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const bikeNavigate = useCallback(
    (path: string) => {
      setIsTransitioning(true);
      // BikeTransition onComplete will call navigate after animation
      const timer = setTimeout(() => {
        navigate(path);
        setIsTransitioning(false);
      }, 1400);
      return () => clearTimeout(timer);
    },
    [navigate]
  );

  return { isTransitioning, bikeNavigate, setIsTransitioning };
};
