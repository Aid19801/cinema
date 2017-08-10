
alert('this works');
console.log('this would be great if it worked');

var movieDiv = document.getElementById('movies-container');

//let temporary var you can change
//const constant
let movies = [
  { title: 'James Bond',
    year: 1992
  },
  { title: 'Justin Bieber LIVE!',
    year: 2014
  },
  { title: 'Terminator 2',
    year: 1991
  },
  { title: 'Spiderman 9',
    year: 2016
  },
  { title: 'When Harry Met Sally',
    year: 1989
  }
]


// document.getElementById('movies-container').innerHTML = 'yo';

movies.map(function(each) {
  console.log('each: ', each.title);
  var textNode = each.title;
  movieDiv.appendChild(textNode)

//take array 'movies' and bolt .map method onto it -- .getElementById similarly
//run .map -- gives an argument to use
//when you call a function, it gives you array
//each element is an object
})

// <div class="carousel">
//    <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
//    <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
//    <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
//    <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></a>
//    <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></a>
//  </div>

console.log('ended');
