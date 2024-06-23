const searchButton = document.querySelector('.search-button');
const searchDiv = document.querySelector('#search-div');

searchButton.addEventListener('click', function() {
  searchDiv.style.display = searchDiv.style.display === 'none' ? 'block' : 'none';
});