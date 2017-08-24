var mysql = require('mysql');
var arr = [];

// connecting to mySQL
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "T$hompsin12",
  database: "sys"
});

// taking everything from the movies table
con.connect(function(err) {
  if (err) throw err;
  con.query('SELECT * FROM movies', (req, res) => {
    // console.log(res);
  })
});

arr.push('i am a pushed arr element');

console.log('arr: ', arr[0]);
