var express = require('express');
var router = express.Router();
const charactersCtrl = require('../controllers/characters');

/* GET users listing. */
router.get('/', isLoggedIn, charactersCtrl.index);
// GET new character form
router.get('/new', isLoggedIn, charactersCtrl.new);
// GET show character
router.get('/:id', isLoggedIn, charactersCtrl.show);
//POST new character
router.post('/',isLoggedIn, charactersCtrl.create);
//DELETE character
router.delete('/:id', isLoggedIn, charactersCtrl.delChar);
//EDIT character
router.get('/:id/edit', isLoggedIn, charactersCtrl.edit);
//PUT Update character
router.put('/:id', charactersCtrl.update);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
