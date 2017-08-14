var express = require('express');
var app = express();

//Set the public folder
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);

console.log('Server started at ' + Date());
console.log('APP on port:>> ' + '3000');
