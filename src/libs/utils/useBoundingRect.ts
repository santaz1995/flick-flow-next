import { useState, useCallback, useLayoutEffect } from 'react';

const debounce = (limit: number, callback: (...args: any[]) => void) => {
  let timeoutId: NodeJS.Timeout | null;
  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, limit, args);
  };
};

function getDimensionObject(node: HTMLElement)   {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    x: rect.x,
    y: rect.y,
    right: rect.right,
    bottom: rect.bottom
  };
}

export default function useBoundingRect(limit: number = 100) {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState<HTMLElement | null>(null);

  const ref = useCallback((node: HTMLElement) => {
    return setNode(node);
  }, []);

  useLayoutEffect(() => {
    if ("undefined" !== typeof window && node) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions(getDimensionObject(node))
        );

      measure();

      const listener = debounce(limit ? limit : 100, measure);

      window.addEventListener("resize", listener);
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("resize", listener);
        window.removeEventListener("scroll", listener);
      };
    }
  }, [node, limit]);

  return [ref, dimensions, node];
}
