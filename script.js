// script.js

document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  searchForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission behavior

      const query = searchInput.value.trim();

      if (query === '') {
          alert('Please enter a search term.');
      } else {
          // Redirect to results.html with the query as a URL parameter
          window.location.href = `results.html?query=${encodeURIComponent(query)}`;
      }
  });
});