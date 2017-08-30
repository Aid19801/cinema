var wrapper = document.getElementById('carouselId');
var searchTerm;

$(document).ready(function($) {


  $('#searchBoxText').on('input', function(e) {
    searchTerm = e.target.value;
    populateCarousel();
    getFocusedInfo();
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
    eachTile.setAttribute("id", each.title);
    eachTile.setAttribute("href", "#linkToSomeWhere");

//setting custom attributes for populating movieInfoPanel
    eachTile.setAttribute("data-prog-title", each.title);
    eachTile.setAttribute("data-prog-cert", each.certificate);
    eachTile.setAttribute("data-prog-format", each.format);
    eachTile.setAttribute("data-prog-year", each.year);
    eachTile.setAttribute("data-prog-runtime", each.length);
    eachTile.setAttribute("data-prog-genre", each.genre);
    eachTile.setAttribute("data-prog-rating", each.rating);
    eachTile.setAttribute("data-prog-actor", each.lead_actor);
    eachTile.setAttribute("data-prog-synopsis", each.synopsis);

//continuation of carousel population
    eachTile.innerHTML = each.title + "<br>";
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
        // tag for each, to append to the *NEW* carousel wrpaper.
        filteredArray.map((each) => {

          var eachTile = document.createElement("a");
          var imageForEachTile = document.createElement("img");
          imageForEachTile.setAttribute('src', each.poster);
          eachTile.setAttribute("class", "carousel-item thumbnail-item");
          eachTile.setAttribute("id", each.title);
          eachTile.setAttribute("href", "#linkToSomeWhere");

      //setting custom attributes for populating movieInfoPanel
          eachTile.setAttribute("data-prog-title", each.title);
          eachTile.setAttribute("data-prog-cert", each.certificate);
          eachTile.setAttribute("data-prog-format", each.format);
          eachTile.setAttribute("data-prog-year", each.year);
          eachTile.setAttribute("data-prog-runtime", each.length);
          eachTile.setAttribute("data-prog-genre", each.genre);
          eachTile.setAttribute("data-prog-rating", each.rating);
          eachTile.setAttribute("data-prog-actor", each.lead_actor);
          eachTile.setAttribute("data-prog-synopsis", each.synopsis);

      //continuation of carousel population
          eachTile.innerHTML = each.title + "<br>";
          eachTile.appendChild(imageForEachTile);
          newWrapper.appendChild(eachTile);
        })

        // newWrapper logs out correct info

        $(wrapper).html(newWrapper);
        // ^^ html is assigned correctly, inspect-element shows
        // correct results in place, but no results on screen.
        $('.carousel').carousel();
        setTimeout(function () {
            getFocusedInfo();
        }, 250);


      }
    })
}

populateCarousel();

function getFocusedInfo() {
//getting the content of newly assigned custom attributes and storing as variable to pass to movieInfoPanel
  var focusedProgTitle = document.getElementsByClassName('carousel-item thumbnail-item active')[0].getAttribute('data-prog-title');
  var focusedProgCertificate = document.getElementsByClassName('carousel-item thumbnail-item active')[0].getAttribute('data-prog-cert');
  var focusedProgFormat = document.getElementsByClassName('carousel-item thumbnail-item active')[0].getAttribute('data-prog-format');
  var focusedProgRuntime = document.getElementsByClassName('carousel-item thumbnail-item active')[0].getAttribute('data-prog-runtime');
  var focusedProgGenre = document.getElementsByClassName('carousel-item thumbnail-item active')[0].getAttribute('data-prog-genre');
  var focusedProgRating = document.getElementsByClassName('carousel-item thumbnail-item active')[0].getAttribute('data-prog-rating');
  var focusedProgActor = document.getElementsByClassName('carousel-item thumbnail-item active')[0].getAttribute('data-prog-actor');
  var focusedProgSynopsis = document.getElementsByClassName('carousel-item thumbnail-item active')[0].getAttribute('data-prog-synopsis');
  var focusedProgYear = document.getElementsByClassName('carousel-item thumbnail-item active')[0].getAttribute('data-prog-year');

//getting certificate image from online based on the certificate assigned in the database
  var focusedProgCertificateIcon = "";

  if (focusedProgCertificate == "U") {
    focusedProgCertificateIcon = "https://jaybullimore98.files.wordpress.com/2014/12/universal.png";
  } else if (focusedProgCertificate == "PG") {
    focusedProgCertificateIcon = "http://mediablogs.keshacademy.com/lucya2blog/files/2014/12/27-2bbji24.png";
  } else if (focusedProgCertificate == "12") {
    focusedProgCertificateIcon = "http://louisabroadheadmediablog.files.wordpress.com/2011/12/bbfc_12_rating1.png";
  } else if (focusedProgCertificate == "15") {
    focusedProgCertificateIcon = "https://upload.wikimedia.org/wikipedia/en/8/8a/BBFC_15_1982-2002.png";
  } else if (focusedProgCertificate == "18") {
    focusedProgCertificateIcon = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/BBFC_18.svg/1200px-BBFC_18.svg.png";
  }

// converting numerical rating system into stars
  var focusedProgRatingStars

  if (focusedProgRating == "1") {
    focusedProgRatingStars = "&#9733 &#9734 &#9734 &#9734 &#9734";
  } else if (focusedProgRating == "2") {
    focusedProgRatingStars = "&#9733 &#9733 &#9734 &#9734 &#9734";
  } else if (focusedProgRating == "3") {
    focusedProgRatingStars = "&#9733 &#9733 &#9733 &#9734 &#9734";
  } else if (focusedProgRating == "4") {
    focusedProgRatingStars = "&#9733 &#9733 &#9733 &#9733 &#9734";
  } else if (focusedProgRating == "5") {
    focusedProgRatingStars = "&#9733 &#9733 &#9733 &#9733 &#9733";
  }

// getting category to show
  var focusedProgFormatConverted

  if (focusedProgFormat == "Movie") {
    focusedProgFormatConverted = "Movies";
  } else if (focusedProgFormat == "TV") {
    focusedProgFormatConverted = "TV Show";
  }

//assigning movieInfoPanel tags to variables for passing above attributes to
  var infoPanelTitle = document.getElementById('moviePanelTitle');
  var infoPanelFormat = document.getElementById('category');
  var infoPanelYear = document.getElementById('year');
  var infoPanelRuntime = document.getElementById('runtime');
  var infoPanelGenre = document.getElementById('genre');
  var infoPanelRating = document.getElementById('rating');
  var infoPanelActor = document.getElementById('leadActor1');
  var infoPanelSynopsis = document.getElementById('synopsis');
  var infoPanelCertificate = document.getElementById('certificate');

  infoPanelTitle.innerText = focusedProgTitle;
  infoPanelFormat.innerText = focusedProgFormatConverted;
  infoPanelYear.innerText = focusedProgYear;
  infoPanelRuntime.innerText = focusedProgRuntime;
  infoPanelGenre.innerText = focusedProgGenre;
  infoPanelRating.innerHTML = focusedProgRatingStars;
  infoPanelActor.innerText = focusedProgActor;
  infoPanelSynopsis.innerText = focusedProgSynopsis;
  infoPanelCertificate.src = focusedProgCertificateIcon;

  //  ('Guardians of the Galaxy Vol. 2').getAttribute('href');
  console.log('Title = ' + focusedProgTitle + '\n' +
              'Certificate = ' + focusedProgCertificateIcon + '\n' +
              'Format = ' + focusedProgFormatConverted + '\n' +
              'Runtime = ' + focusedProgRuntime + '\n' +
              'Genre = ' + focusedProgGenre + '\n' +
              'Rating = ' + focusedProgRatingStars + '\n' +
              'Lead Actor = ' + focusedProgActor + '\n' +
              'Synopsis = ' + focusedProgSynopsis + '\n');
}
