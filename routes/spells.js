var express = require('express');
var router = express.Router();
const spellsCtrl = require('../controllers/spells');

router.get('/characters/:id/spells/new', spellsCtrl.new);

router.post('/characters/:id/spells', spellsCtrl.addSpell);

router.delete('/characters/:id/spells/:index', spellsCtrl.delSpell);

module.exports = router;