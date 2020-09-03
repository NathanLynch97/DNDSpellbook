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
//DELETE character
router.delete('/:id', charactersCtrl.delChar);
//EDIT character
router.get('/:id/edit', charactersCtrl.edit);
//PUT Update character
router.put('/:id', charactersCtrl.update);

module.exports = router;
