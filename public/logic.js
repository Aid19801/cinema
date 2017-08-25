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
        moviesArray.map((each) => {
          var st = searchTerm.split('');
          var mov = each.title.split('')

          for (var i = 0; i < st.length; i++) {
            if (st[i] === mov[i]) {
              tempResultsArr.push(each)
            }
          }
          })

          tempResultsArr.map((each) => {
            var eachTile = document.createElement("a");
            var imageForEachTile = document.createElement("img");
            imageForEachTile.setAttribute('src', each.poster);
            eachTile.setAttribute("class", "carousel-item thumbnail-item");
            eachTile.setAttribute("href", "#linkToSomeWhere");
            eachTile.innerHTML = each.title;
            eachTile.appendChild(imageForEachTile);
            wrapper.appendChild(eachTile);
        })
        console.log('shitty: ', tempResultsArr);
      }

    })
}

populateCarousel();
