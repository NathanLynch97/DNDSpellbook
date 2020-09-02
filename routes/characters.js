var express = require('express');
var router = express.Router();
const charactersCtrl = require('../controllers/characters');

/* GET users listing. */
router.get('/', charactersCtrl.index);
// GET new character form
router.get('/new', charactersCtrl.new);
// GET show character
router.get('/:id', charactersCtrl.show);
//POST new character
router.post('/', charactersCtrl.create);

module.exports = router;
