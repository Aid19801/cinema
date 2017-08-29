var express = require('express');
var app = express();
var mysql = require('mysql');
var securityId = require('./getData').securityId;
let arrayOfProgramData = []


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
  res.sendFile(__dirname + '/Login_and_Register/adminControls.html');
})

app.post('/admin', function (req, res) {
console.log('youre in admin posting');
  if(typeof req.body.movieProgID === 'undefined'){
    // The parameter is missing, example response...
    res.status(400).json({ error: 'missing parameter bar', data: null }); // Only an  example
    return;
  }

  let movieProgID = req.body.movieProgID;
  console.log('movieProgID: ', movieProgID);
  res.status(200).json({ error: null, data: movieProgID }); // We received the value and only to show the example, returns it in a json within the key 'data'

});

app.listen(3000);

console.log('Server started at ' + Date());
console.log('APP on port:>> ' + '3000');
