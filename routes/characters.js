var express = require('express');
var router = express.Router();
const charactersCtrl = require('../controllers/characters');

/* GET users listing. */
router.get('/', charactersCtrl.index);
// GET new character form
router.get('/characters/new', )

module.exports = router;
