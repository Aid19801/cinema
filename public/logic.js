var wrapper = document.getElementById('carouselId');

function populateCarousel() {
  var moviesArray = [];


  fetch('http://localhost:3000/getdata')
    .then((res) => res.json())
    .then((json) => {
      moviesArray = json;

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
      // $my car . update()
    })
}

populateCarousel();
