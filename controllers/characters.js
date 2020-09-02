const Character = require('../models/character');

const axios = require("axios");

const rootURL = "https://www.dnd5eapi.co/api/spells";

module.exports = {
    index,
    new: newCharacter,
    create,
    show
};

function index(req, res, next) {
    Character.find({}, function(err, characters) {
        res.render('characters/index', {characters, user: req.user});
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

async function show(req, res, next) {
    Character.findById(req.params.id, async function(err, character) {
        let spells = character.spells;
        // console.log(spells);
        let spellInfo = [];
        let promises = [];
        spells.forEach(s => {
            promises.push(axios.get(`${rootURL}/${s.index}`))
        })
        try {
            let spellInfo = await Promise.all(promises)
            // console.log(spellInfo);
            let finalSpellInfo = [];
            spellInfo.forEach(function(s) {
                finalSpellInfo.push(s.data);
            })
            // finalSpellInfo.sort(function(a, b) {
            //     return a.index - b.index;
            // })
            // spellInfo = spellInfo.data;
            // console.log(finalSpellInfo);
             return res.render('characters/show', {character, spellInfo: finalSpellInfo})
        } catch(err){
            console.log(err)
        }
    })
}