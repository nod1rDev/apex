import React, { useEffect } from "react";

// Performance monitoring for React components
export const withPerformanceTracking = (WrappedComponent, options = {}) => {
  const {
    name = WrappedComponent.displayName || WrappedComponent.name,
    threshold = 16 // 60fps frame budget
  } = options;

  return function PerformanceTrackedComponent(props) {
    useEffect(() => {
      const start = performance.now();

      return () => {
        const duration = performance.now() - start;
        if (duration > threshold) {
          console.warn(
            `Component ${name} took ${duration.toFixed(
              2
            )}ms to render, which is above the ${threshold}ms threshold`
          );
        }
      };
    }, []);

    // JSX o'rniga React.createElement ishlatamiz
    return React.createElement(WrappedComponent, props);
  };
};

// Performance measurement utilities
export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${name} took ${(end - start).toFixed(2)}ms`);
  return result;
};

// Debounce utility for performance optimization
export const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

// Throttle utility for performance optimization
export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Memoization utility for expensive computations
export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

// Image loading optimization
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Batch DOM updates for better performance
export class BatchUpdate {
  constructor() {
    this.updates = new Set();
  }

  add(update) {
    this.updates.add(update);
    this.scheduleFlush();
  }

  scheduleFlush() {
    if (!this.flushScheduled) {
      this.flushScheduled = true;
      requestAnimationFrame(() => {
        this.flush();
      });
    }
  }

  flush() {
    this.updates.forEach((update) => update());
    this.updates.clear();
    this.flushScheduled = false;
  }
}

// Resource loading optimization
export const loadResource = async (url, options = {}) => {
  const { timeout = 5000, retries = 3, backoff = 1000 } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        ...options,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, backoff * (i + 1)));
    }
  }
};
