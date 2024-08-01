export const changeCollection = (collection) => {
    const currentUrl = new URL(window.location.href);

    // Create URLSearchParams object from the current query parameters
    const queryParams = new URLSearchParams(currentUrl.search);
  
    // Set or update the query parameter
    queryParams.set('collection', collection);
  
    // Create the new URL with updated query parameters
    const newUrl = `${currentUrl.pathname}?${queryParams.toString()}`;
  
    // Update the URL without reloading the page
    window.history.pushState(null, '', newUrl);
}