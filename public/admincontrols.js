var wrapper = document.getElementById('movies-table');
var data;

$(document).ready(function($) {
  populateTable();
});


function populateTable() {

  fetch('http://localhost:3000/getdata')
    .then((res) => res.json())
    .then((json) => {
      data = json;

      data.map((each) => {
        // for each object, create a new row
        var tableRow = document.createElement('tr');
        tableRow.setAttribute('id', 'tableRow');

        // create and append the ID.
        var idChild = document.createElement('td');
        idChild.setAttribute('class', 'idChild');
        idChild.innerHTML = each.id;
        tableRow.appendChild(idChild);

        // create and append the Title.
        var titleChild = document.createElement('td');
        titleChild.innerHTML = each.title;
        tableRow.appendChild(titleChild);

        // create and append the Year.
        var yearChild = document.createElement('td');
        yearChild.innerHTML = each.year;
        tableRow.appendChild(yearChild);

        // create and append the Edit Button.
        var buttonChild = document.createElement('button');
        buttonChild.setAttribute('class', 'btn btn-info edit-prog')
        buttonChild.setAttribute('id', 'btnLog');
        buttonChild.setAttribute('data-toggle', 'modal');
        buttonChild.setAttribute('data-target', '#myModal');
        buttonChild.innerHTML = 'Edit';

        tableRow.appendChild(buttonChild);
        wrapper.appendChild(tableRow);

      })

      let programToEdit;

      // get the ID of the movie to edit
      $('.edit-prog').on('click', function(e) {

        // get the sibling object/information from neighbouring fields/ID/Name etc
        let btn = e.target;
        let sibs = $(btn).siblings();
        let program = sibs[0].innerHTML;

        // getting the modal elements
        var title = document.getElementById('modal-title');
        var synopsis = document.getElementById('synopsis');
        var year = document.getElementById('year');
        var rating = document.getElementById('rating');
        var cert = document.getElementById('certificate');
        var poster = document.getElementById('poster');
        var format = document.getElementById('format');
        var genre = document.getElementById('genre');
        var leadActor = document.getElementById('lead-actor');

        // loop through api 'data' and if the sibling/ID matches
        // change the value in the modal to the api data also
        // this lets us edit the information and submit/post it to
        // MySQL.

        for (var i in data) {
          let progrId = program * 1;
          if (data[i].id === progrId) {
            movieProgID.value = progrId;
            synopsis.value = data[i].synopsis;
            year.value = data[i].year;
            cert.value = data[i].certificate;
            rating.value = data[i].rating;
            poster.value = data[i].poster;
            format.value = data[i].format;
            genre.value = data[i].genre;
            leadActor.value = data[i].lead_actor;
          }
        }
      })

    })

}
