var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cheezy', function(req, res, next) {
  res.render('cheezy_index', { title: 'Express' });
});


module.exports = router;
