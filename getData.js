var mysql = require('mysql');

exports.getMoviesData = function (req, res) {
  let arr = [];

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "T$hompsin12",
    database: "sys"
  });

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
    return arr;
  });

setTimeout(function () {
  console.log('bbuibuibuibiu');
}, 2000);

return arr;
}
