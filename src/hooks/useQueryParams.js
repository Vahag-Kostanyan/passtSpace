import { useState, useEffect } from 'react';

export const useQueryParams = (set) => {
    const [queryParams, setQueryParams] = useState({});

    useEffect(() => {
      const updateQueryParams = () => {
        const searchParams = new URLSearchParams(window.location.search);
        const params = {};
        for (const [key, value] of searchParams.entries()) {
          params[key] = value;
        }
        setQueryParams(params);
      };
  
      // Initialize the state with current query parameters
      updateQueryParams();
  
      // Listen for changes in the URL
      const handlePopState = () => {
        updateQueryParams();
      };
  
      window.addEventListener('popstate', handlePopState);
  
      // Also handle changes from pushState and replaceState
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;
  
      history.pushState = function(...args) {
        originalPushState.apply(this, args);
        updateQueryParams();
      };
  
      history.replaceState = function(...args) {
        originalReplaceState.apply(this, args);
        updateQueryParams();
      };
  
      // Cleanup event listeners and overridden methods on component unmount
      return () => {
        window.removeEventListener('popstate', handlePopState);
        history.pushState = originalPushState;
        history.replaceState = originalReplaceState;
      };
    }, []);
  
    return queryParams;
}
