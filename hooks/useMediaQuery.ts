import { useState, useEffect } from "react";

export const useMediaQuery = (query: string): boolean => {
  // Check if the window object is defined (to avoid ReferenceError during SSR)
  const isClient = typeof window !== "undefined";

  const [matches, setMatches] = useState<boolean>(
    isClient ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Initial check and subscribe to changes
    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", handleChange);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query, isClient]);

  return matches;
};
