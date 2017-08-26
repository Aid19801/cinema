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

        function checkWords(st, arr) {
            let term = st.toLowerCase();
            return arr.filter(each => each.title.toLowerCase().indexOf(term) === 0);
        }

        let filteredArray = checkWords(searchTerm, moviesArray);

        $('#carouselId').html('');

        filteredArray.map((each) => {

          var eachTile = document.createElement("a");
          var imageForEachTile = document.createElement("img");
          imageForEachTile.setAttribute('src', each.poster);
          eachTile.setAttribute("class", "carousel-item thumbnail-item");
          eachTile.setAttribute("href", "#linkToSomeWhere");
          eachTile.innerHTML = each.title;
          eachTile.appendChild(imageForEachTile);
          wrapper.appendChild(eachTile);
        })

      }
    })
}

populateCarousel();
