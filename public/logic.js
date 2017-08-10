
alert('this works');
console.log('this would be great if it worked');

var moviesUl = document.getElementById('ul-thing');


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


document.getElementById('movies-container').innerHTML = 'yo';

movies.map(function(each) {
  moviesUl.appendChild(document.createTextNode('li').innerHTML = 'boo');
})
