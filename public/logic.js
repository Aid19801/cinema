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

        // as soon as you type, you nuke the existing html.
        $('#carouselId').html('');

        // function that filters api down to relevant objects/results
        function checkWords(st, arr) {
            let term = st.toLowerCase();
            return arr.filter(each => each.title.toLowerCase().indexOf(term) === 0);
        }

        // place search results in 'filteredArray'
        let filteredArray = checkWords(searchTerm, moviesArray);

        // creating a whole new wrapper and carousel component
        // to replace the nuked one.
        let newWrapper = document.createElement('div')
        newWrapper.setAttribute('id', 'carouselId');
        newWrapper.setAttribute('class', 'carousel');

        // map through the array and create a new image and attribute
        // tag for each, to append to the carousel wrpaper.
        filteredArray.map((each) => {
          var eachTile = document.createElement("a");
          var imageForEachTile = document.createElement("img");
          imageForEachTile.setAttribute('src', each.poster);
          eachTile.setAttribute("class", "carousel-item thumbnail-item");
          eachTile.setAttribute("href", "#linkToSomeWhere");
          eachTile.innerHTML = each.title;
          eachTile.appendChild(imageForEachTile);
          newWrapper.appendChild(eachTile);
        })

        console.log('newWrapper: ', newWrapper);
        
        let testH1 = '<div><h1>I am an h1 tag</h1></div>';
        $(wrapper).html(testH1);



      }
    })
}

populateCarousel();
