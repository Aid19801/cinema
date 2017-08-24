


getMoviesData = function (req, res) {

let finalThing;

// all of this a promise
  const getTheFuckingData = () => {

    let arr = [];

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "T$hompsin12",
      database: "sys"
    });

  	return new Promise((resolve) => {
      con.query('SELECT * FROM movies', function (error, results, fields) {
        if (error) throw error;

        results.map((each) => {

          var newProgramObject = {
            id: each.id,
            title: each.title,
            year: each.year,
            length: each.length,
            lead_actor: each.lead_actor,
            synopsis: each.synopsis,
            rating: each.rating,
            certificate: each.certificate,
            genre: each.genre
          }

          arr.push(newProgramObject);

        })
        resolve(arr);
      });
    })
  }

  getTheFuckingData().then((result) => {
    finalThing = result;
    return finalThing;
  })

  return finalThing;
}
