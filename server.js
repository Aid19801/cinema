var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var securityId = require('./getData').securityId;
let arrayOfProgramData = []

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const getProgramDataFromDb = () => {

  let arr = [];

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: securityId,
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
          genre: each.genre,
          format: each.progFormat,
          poster: each.posterUrl
        }

        arr.push(newProgramObject);

      })
      resolve(arr);
    });
  })
}

// const postProgramDataToDb = () => {
//
//   let arr = [];
//
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: securityId,
//     database: "sys"
//   });
//
// 	return new Promise((resolve) => {
//
//     con.connect((err) => {
//       if (err) throw err;
//       console.log("Connected!");
//       var sql = "INSERT INTO movies (name, address) VALUES ('Company Inc', 'Highway 37')";
//       con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//       });
//     });
//
//
//     con.query('SELECT * FROM movies', function (error, results, fields) {
//       if (error) throw error;
//
//       results.map((each) => {
//
//         var newProgramObject = {
//           id: each.id,
//           title: each.title,
//           year: each.year,
//           length: each.length,
//           lead_actor: each.lead_actor,
//           synopsis: each.synopsis,
//           rating: each.rating,
//           certificate: each.certificate,
//           genre: each.genre,
//           format: each.progFormat,
//           poster: each.posterUrl
//         }
//
//         arr.push(newProgramObject);
//
//       })
//       resolve(arr);
//     });
//   })
// }
//
// postProgramDataToDb()

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

app.get('/admin', function (req, res) {
  res.sendFile(__dirname + '/adminControls.html');
})

app.post('/admin', function (req, res) {

  let data = req.body;
  console.log(data);




});

app.listen(3000);

console.log('Server started at ' + Date());
console.log('APP on port:>> ' + '3000');
