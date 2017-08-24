var express = require('express');
var app = express();
var mysql = require('mysql');

let arrayOfProgramData = []


const getProgramDataFromDb = () => {

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

getProgramDataFromDb().then((result) => {
  arrayOfProgramData = result;
  return arrayOfProgramData;
})


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/getdata', function(req, res) {

  res.send(JSON.stringify(arrayOfProgramData));

})

app.listen(3000);

console.log('Server started at ' + Date());
console.log('APP on port:>> ' + '3000');
