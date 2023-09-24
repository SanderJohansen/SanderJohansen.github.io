document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
  
    searchButton.addEventListener("click", function() {
      const keyword = searchInput.value;
      console.log("Search initiated for keyword:", keyword);
  
      // TODO: Make an AJAX call to the backend with the keyword
    });
  });