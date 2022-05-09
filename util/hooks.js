import { useCallback, useEffect, useRef } from "react";

export function useEvent(callback) {
  const a = useRef(callback);
  useEffect(() => {
    a.current = callback;
  });
  return useCallback(() => {
    const fn = a.current;
    typeof fn === "function" && fn(...arguments);
  }, []);
}
