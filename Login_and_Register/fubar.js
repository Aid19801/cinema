function fubar() {
  console.log('fubar fubar');

  app.post('/admin', function (req, res) {
  console.log('youre in admin postng');
    if(typeof req.body.movieProgID === 'undefined'){
      // The parameter is missing, example response...
      res.status(400).json({ error: 'missing parameter bar', data: null }); // Only an  example
      return;
    }

    let movieProgID = req.body.movieProgID;
    console.log('movieProgID: ', movieProgID);
    res.status(200).json({ error: null, data: movieProgID }); // We received the value and only to show the example, returns it in a json within the key 'data'

  });
}
