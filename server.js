var express = require('express');
var app = express();

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

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);

console.log('Server started at ' + Date());
console.log('APP on port:>> ' + '3000');