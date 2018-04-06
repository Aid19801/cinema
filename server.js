var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var securityId = require('./getData').securityId; // Your Root Password Here //  
let arrayOfProgramData = []

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// USER ACCOUNT INFO | Adminstrator Credentials Check
const checkAdminData = (un, pw) => {

  let userResult = false;
  let pwResult = false;

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: securityId,
    database: "sys"
  });

  return new Promise((resolve) => {
    con.query('SELECT * FROM myAdmins', function (error, results, fields) {
      if (error) throw error;

      results.map((each) => {
        if (each.AdminUsername == un) {
          userResult = true;
          if (each.AdminPassword == pw) {
            pwResult = true;
            console.log('pwResult TRUE:?> ', pwResult);
            resolve(pwResult);
          } else {
            console.log('pwResult FALSE:?> ', pwResult);
            resolve(false);
          }
        }
      })
    });
  })
}

// USER ACCOUNT INFO | User Credentials Check
const checkUserData = (un, pw) => {

  let userResult = false;
  let pwResult = false;

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
        if (each.email == un) {
          userResult = true;
          if (each.password == pw) {
            pwResult = true;
            console.log('pwResult TRUE:?> ', pwResult);
            resolve(pwResult);
          } else {
            console.log('pwResult FALSE:?> ', pwResult);
            resolve(false);
          }
        }
      })
    });
  })
}

// PROGRAM DATA INFO | taking data in from MySQL database
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
        // takes everything from the movies DB
        // creates a new object for every row
        // And then pushes that object into an array.

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

// PROGRAM DATA INFO | takes data from admin section
// posts to MySQL database.
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

// USER ACCOUNT INFO | creates new user account
const postUserDataToDB = (first, last, email, pw) => {

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: securityId,
    database: "sys"
  });

  return new Promise((resolve) => {

    con.connect(function(err) {

      if (err) throw err;
      var sql = `INSERT INTO myusers (firstname, lastname, email, password) VALUES ('${first}', '${last}', '${email}', '${pw}')`;

      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
        resolve(true);
      });

    });
  })
}

getProgramDataFromDb().then((result) => {
  arrayOfProgramData = result;
  return arrayOfProgramData;
})

// assigns the default file for static files.
app.use(express.static(__dirname + '/public'));


// ROUTING | in order of user journey

// splash page
app.get('/splash', function (req, res) {
  res.sendFile(__dirname + '/public/splashPage.html');
})

// login page | GET
app.get('/login', function (req, res) {
  res.sendFile(__dirname + '/public/loginForm.html');
})

// login page | POST
app.post('/login', function (req, res) {

  let username = req.body.emailAddress;

  let password = req.body.password;

  checkUserData(username, password)
    .then((x) => {

      if (x === false) {

        res.send('FAIL');

      } else {
        res.sendFile(__dirname + '/public/index.html');
      }
    })
});

// admin login page
app.get('/adminLogin', function (req, res) {
  res.sendFile(__dirname + '/public/adminLoginForm.html');
})

// post/check login info from myAdmins database
app.post('/adminLogin', function (req, res) {

  let adminUser = req.body.username;

  let adminPassword = req.body.password;

  checkAdminData(adminUser, adminPassword)
    .then((x) => {

      if (x === false) {
        res.sendFile(__dirname + '/public/adminLoginForm.html');
      } else {
        res.sendFile(__dirname + '/public/adminControls.html');
      }
    })
});

// get register page
app.get('/register', function (req, res) {
  res.sendFile(__dirname + '/public/regForm.html');
})

// post register page data
app.post('/register', function (req, res) {
  let x = req.body;

  let firstname = x.firstname;
  let lastname = x.lastname;
  let emailAddress = x.emailAddress;
  let confEmail = x.ConfEmail;
  let password = x.password;
  let confirmPassword = x.ConfirmPassword;


  postUserDataToDB(firstname, lastname, emailAddress, password)
    .then((bool) => {
      console.log('true? ', bool);
    })

  res.sendFile(__dirname + '/public/loginForm.html');

});

// main app page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// api route so we could pass back end data
// to the front end via an AJAX/fetch request.
app.get('/getdata', function(req, res) {
  res.send(JSON.stringify(arrayOfProgramData));
})

// admin section
app.get('/admin', function (req, res) {
  res.sendFile(__dirname + '/public/adminControls.html');
})

// Sky packages/accounts page
app.get('/accounts', function (req, res) {
  res.sendFile(__dirname + '/public/accountspage.html');
})

// posting catalog changes to admin page
app.post('/admin', function (req, res) {
  let data = req.body;
  postProgramDataToDb(data)

  getProgramDataFromDb().then((result) => {
    arrayOfProgramData = result;
    return arrayOfProgramData;
  })

  res.sendFile(__dirname + '/public/adminControls.html');
});

app.listen(3000);

console.log('Server started at ' + Date());
console.log('APP on port:>> ' + '3000');
