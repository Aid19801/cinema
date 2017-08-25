var wrapper = document.getElementById('carouselId');
var searchTerm;

$(document).ready(function($) {

  $('#searchBoxText').on('input', function(e) {
    searchTerm = e.target.value;
    populateCarousel();
  });

});

function populateCarousel() {
  var moviesArray = [];
  var tempResultsArr = [];

  fetch('http://localhost:3000/getdata')
    .then((res) => res.json())
    .then((json) => {
      moviesArray = json;

// ===== if NO searchTerm is entered ====
      if (typeof searchTerm === 'undefined') {
        moviesArray.map((each) => {

          var eachTile = document.createElement("a");
          var imageForEachTile = document.createElement("img");
          imageForEachTile.setAttribute('src', each.poster);
          eachTile.setAttribute("class", "carousel-item thumbnail-item");
          eachTile.setAttribute("href", "#linkToSomeWhere");
          eachTile.innerHTML = each.title;
          eachTile.appendChild(imageForEachTile);
          wrapper.appendChild(eachTile);
        })

      } else {

        /// HERE i'm struggling to use 'searchTerm'
        // to filter the moviesArray objects
        // that then populate the carousel.

        function filterResults(arr, st, index) {
          if (searchTerm matches the charAt(lengthOfSearch - 1)) {

          }
        }

        // i figured moviesArray.map((each) and then
        // if each.title charAt(0) matches searchTerm charAt(0)
        // then do all the appendChild stuff. Thoughts? 
      }

    })
}

populateCarousel();
