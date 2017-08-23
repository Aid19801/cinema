var express = require('express');
var app = express();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "T$hompsin12",
  database: "sys"
});

con.connect(function(err) {
  if (err) throw err;
  con.query('SELECT * FROM movies', (req, res) => {
    console.log('res: ----> ', res);
  })
});

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);

console.log('Server started at ' + Date());
console.log('APP on port:>> ' + '3000');
