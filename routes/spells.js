var express = require('express');
var router = express.Router();
const spellsCtrl = require('../controllers/spells');

router.get('/characters/:id/spells/new', spellsCtrl.new);

router.post('/characters/:id/spells', spellsCtrl.addSpell);

module.exports = router;