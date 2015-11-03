var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', subtitle: 'My Test' });
});


// accept POST request on the homepage
router.post('/users', function (req, res) {
  res.send('Got a POST request');
});

// accept PUT request at /user
router.put('/users', function (req, res) {
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
router.delete('/users', function (req, res) {
  res.send('Got a DELETE request at /user');
});



module.exports = router;
