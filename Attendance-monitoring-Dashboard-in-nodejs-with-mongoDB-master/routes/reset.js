var express = require('express');
var router = express.Router();

/* GET Reset page. */
router.get('/', function(req, res, next) {
  res.render("reset");
});

module.exports = router;
