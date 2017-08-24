var express = require('express');
var app = express();
var mysql = require('mysql');
// var arr = [];
//
// // connecting to mySQL
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "T$hompsin12",
//   database: "sys"
// });
//
// // taking everything from the movies table
// con.connect(function(err) {
//   if (err) throw err;
//   con.query('SELECT * FROM movies', (req, res) => {
//     // console.log(res);
//   })
// });
//
// arr.push('i am a pushed arr element');
//
// module.exports = arr;
//
// console.log('arr: ', arr[0]);

<<<<<<< HEAD
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
=======
>>>>>>> b615126db44c75f34792020c7b030ac2dbd2061c
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);

console.log('Server started at ' + Date());
console.log('APP on port:>> ' + '3000');