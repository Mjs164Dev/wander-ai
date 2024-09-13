// results.js

document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('query');

  const searchQueryElement = document.getElementById('search-query');

  if (query) {
      searchQueryElement.textContent = query;
  } else {
      searchQueryElement.textContent = 'No search query provided.';
  }
});