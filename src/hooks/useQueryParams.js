// import { useState, useEffect } from 'react';

// export const useQueryParams = (set) => {
//     const [queryParams, setQueryParams] = useState(() => {
//       const params = new URLSearchParams(window.location.search);
//       const initialParams = {};
//       for (const [key, value] of params.entries()) {
//           initialParams[key] = value;
//       }
//       return initialParams;
//   });

//     useEffect(() => {
//       const updateQueryParams = () => {
//         const searchParams = new URLSearchParams(window.location.search);
//         const params = {};
//         for (const [key, value] of searchParams.entries()) {
//           params[key] = value;
//         }
//         setQueryParams(params);
//       };
  
//       // Initialize the state with current query parameters
//       updateQueryParams();
  
//       // Listen for changes in the URL
//       const handlePopState = () => {
//         updateQueryParams();
//       };
  
//       window.addEventListener('popstate', handlePopState);
  
//       // Also handle changes from pushState and replaceState
//       const originalPushState = history.pushState;
//       const originalReplaceState = history.replaceState;
  
//       history.pushState = function(...args) {
//         originalPushState.apply(this, args);
//         updateQueryParams();
//       };
  
//       history.replaceState = function(...args) {
//         originalReplaceState.apply(this, args);
//         updateQueryParams();
//       };
  
//       // Cleanup event listeners and overridden methods on component unmount
//       return () => {
//         window.removeEventListener('popstate', handlePopState);
//         history.pushState = originalPushState;
//         history.replaceState = originalReplaceState;
//       };
//     }, []);
  
//     return queryParams;
// }



// import { useState, useEffect } from 'react';

// export const useQueryParams = () => {
//     const [queryParams, setQueryParams] = useState(() => {
//         const params = new URLSearchParams(window.location.search);
//         const initialParams = {};
//         for (const [key, value] of params.entries()) {
//             initialParams[key] = value;
//         }
//         return initialParams;
//     });

//     useEffect(() => {
//         const updateQueryParams = () => {
//             const params = new URLSearchParams(window.location.search);
//             const newParams = {};
//             for (const [key, value] of params.entries()) {
//                 newParams[key] = value;
//             }
//             setQueryParams(newParams);
//         };

//         const handlePopState = () => {
//             updateQueryParams();
//         };

//         // Listen for back/forward navigation
//         window.addEventListener('popstate', handlePopState);

//         // Listen for changes in URL through pushState and replaceState
//         const originalPushState = history.pushState;
//         const originalReplaceState = history.replaceState;

//         history.pushState = function (...args) {
//             originalPushState.apply(this, args);
//             updateQueryParams();
//         };

//         history.replaceState = function (...args) {
//             originalReplaceState.apply(this, args);
//             updateQueryParams();
//         };

//         return () => {
//             window.removeEventListener('popstate', handlePopState);
//             history.pushState = originalPushState;
//             history.replaceState = originalReplaceState;
//         };
//     }, []);

//     return queryParams;
// };



import { useState, useEffect } from 'react';

export const useQueryParams = () => {
    const [queryParams, setQueryParams] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        const initialParams = {};
        for (const [key, value] of params.entries()) {
            initialParams[key] = value;
        }
        return initialParams;
    });

    useEffect(() => {
        const updateQueryParams = () => {
            const params = new URLSearchParams(window.location.search);
            const newParams = {};

            // Populate newParams with current query params
            for (const [key, value] of params.entries()) {
                newParams[key] = value;
            }

            // If there are no params, reset to an empty object
            setQueryParams(Object.keys(newParams).length ? newParams : {});
        };

        const handlePopState = () => {
            updateQueryParams();
        };

        // Listen for back/forward navigation
        window.addEventListener('popstate', handlePopState);

        // Listen for changes in URL through pushState and replaceState
        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;

        history.pushState = function (...args) {
            originalPushState.apply(this, args);
            updateQueryParams();
        };

        history.replaceState = function (...args) {
            originalReplaceState.apply(this, args);
            updateQueryParams();
        };

        // Listen for changes in the URL hash or search params
        const handleUrlChange = () => {
            updateQueryParams();
        };

        window.addEventListener('hashchange', handleUrlChange);
        window.addEventListener('search', handleUrlChange);

        // Cleanup event listeners and overridden methods on unmount
        return () => {
            window.removeEventListener('popstate', handlePopState);
            window.removeEventListener('hashchange', handleUrlChange);
            window.removeEventListener('search', handleUrlChange);
            history.pushState = originalPushState;
            history.replaceState = originalReplaceState;
        };
    }, []);

    return queryParams;
};

