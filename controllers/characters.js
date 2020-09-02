const Character = require('../models/character');

module.exports = {
    index,
    new: newCharacter,
    create,
    show
};

function index(req, res, next) {
    Character.find({}, function(err, characters) {
        res.render('characters/index', {characters});
    })
}

function newCharacter(req, res, next) {
    res.render('characters/new');
}

function create(req, res, next) {
    const character = new Character(req.body);
    character.save(function(err) {
        if (err) return res.render('characters/new');
        res.redirect('/characters');
    })
}

function show(req, res, next) {
    Character.findById(req.params.id, function(err, character) {
        res.render('characters/show', {character});
    })
}