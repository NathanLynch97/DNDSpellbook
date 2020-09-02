var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('characters/index', {title: 'Characters'});
});
// GET new character form
router.get('/characters/new', )

module.exports = router;
