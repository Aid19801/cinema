fetch('http://localhost:3000/getdata').then((x) => x.json()
  .then((y) => {
    console.log('front end stuff: ', y);
  }))

$(document).ready(function(){
  movies.map(function(each) {
    console.log('each: ', each.title);
    // var textNode = each.title;
    // movieDiv.appendChild(textNode)

  //take array 'movies' and bolt .map method onto it -- .getElementById similarly
  //run .map -- gives an argument to use
  //when you call a function, it gives you array
  //each element is an object
  })

});

var movieDiv = document.getElementById('movies-container');

console.log('ended');
