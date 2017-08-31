var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
console.log('loaded');
var securityId = require('./getData').securityId;
let arrayOfProgramData = []

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const checkUserData = (un, pw) => {

let result = true;

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: securityId,
    database: "sys"
  });

  return new Promise((resolve) => {
    con.query('SELECT * FROM myusers', function (error, results, fields) {
      if (error) throw error;
      results.map((each) => {

        if ((each.email === un) && (each.password === pw)) {
          console.log('MATCHED: ', each.email);
          console.log('MATCHED: ', pw);
          resolve(true);
        } else {
          resolve(false);
        }
      })
    });
  })

}


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
          poster: each.posterUrl,
          progLink: each.progLink
        }

        arr.push(newProgramObject);

      })
      resolve(arr);
    });
  })
}

const postProgramDataToDb = (incomingData) => {

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: securityId,
    database: "sys"
  });

	return new Promise((resolve) => {
    let primaryKey = incomingData.movieProgID;

    con.connect(function(err) {
      if (err) throw err;
      var sql = `UPDATE movies SET title = '${incomingData.title}',
      length = '${incomingData.length}',
      lead_actor = '${incomingData.lead_actor}',
      synopsis = '${incomingData.synopsis}',
      certificate = '${incomingData.certificate}',
      rating = '${incomingData.rating}',
      posterUrl = '${incomingData.poster}',
      progFormat = '${incomingData.format}',
      genre = '${incomingData.genre}'
      WHERE id = '${primaryKey}'`;

      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
      });

    });
  })
}

getProgramDataFromDb().then((result) => {
  arrayOfProgramData = result;
  return arrayOfProgramData;
})


app.use(express.static(__dirname + '/public'));

// splash page
app.get('/splash', function (req, res) {
  res.sendFile(__dirname + '/public/splashPage.html');
})

// login page
app.get('/login', function (req, res) {
  res.sendFile(__dirname + '/public/loginForm.html');
})

// vv posting login info to database vv
app.post('/login', function (req, res) {

  let username = req.body.emailAddress;
  console.log('USER: ', username);
  let password = req.body.password;
  console.log('PW: ', password);

  checkUserData(username, password)
    .then((x) => {
      if (x === false) {
        res.sendFile(__dirname + '/public/index.html');
      } else {
        res.sendFile(__dirname + '/public/loginForm.html');
      }
    })
});

// ^^ posting login info to database ^^

// login page
app.get('/register', function (req, res) {
  res.sendFile(__dirname + '/public/regForm.html');
})

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
  postProgramDataToDb(data)

  getProgramDataFromDb().then((result) => {
    arrayOfProgramData = result;
    return arrayOfProgramData;
  })

  res.sendFile(__dirname + '/adminControls.html');
});

app.listen(3000);

console.log('Server started at ' + Date());
console.log('APP on port:>> ' + '3000');
