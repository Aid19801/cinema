
// var express = require('express');
var mysql = require('mysql');

exports.getMoviesData = function (req, res) {
  return ({ name: 'test_123' })
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
  //     return res;
  //   })
  // });
}
