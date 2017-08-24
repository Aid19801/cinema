var express = require('express');
var app = express();
var mysql = require('mysql');
var getDataScript = require('./getData');
var fubar = getDataScript.getMoviesData();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "skyVideo",
});

con.connect(function(err) {
  if (err) throw err;
  con.query('select * from movies', (req, res) => {
    console.log(res);
  })
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



// var mysql = require('mysql');
//
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword"
// });
//
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
// hep1hOlkOg.s
//Set the public folder

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/getdata', function(req, res) {
  res.send('Working End Point: ' + getDataScript.getMoviesData(req, res).name);
  // console.log('res: GIRAFFE ', res);
})

app.listen(3000);

console.log('Server started at ' + Date());
console.log('APP on port:>> ' + '3000');