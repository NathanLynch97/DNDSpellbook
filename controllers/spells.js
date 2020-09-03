const Character = require("../models/character");

const axios = require("axios");
const request = require('request');

const rootURL = "https://www.dnd5eapi.co/api/spells";

/* GET home page. */

module.exports = {
  new: newSpell,
  addSpell,
  delSpell
};

function newSpell(req, res) {
  Character.findById(req.params.id, function (err, character) {
    request(`${rootURL}`, function (err, response, body) {
      let spellData = JSON.parse(body);
      spellData = spellData.results;
      let unaddedSpells = spellData.filter(
        (s) => !character.spells.toString().includes(s.index)
      );
      res.render("characters/spells/new", {
        character,
        spellData: unaddedSpells,
      });
    });
  });
}

function addSpell(req, res) {
  Character.findById(req.params.id, function(err, character) {
      if (typeof req.body.index == 'object') {
            for (let i = 0; i < req.body.index.length; i++) {
              let spell = { index: req.body.index[i] };
              character.spells.push(spell);
            }
    } else {
        character.spells.push(req.body);
    }
    character.save(function (err, c) {
      if (err) {
        console.log(err);
        return res.redirect(`back`);
      }
      res.redirect(`/characters/${character._id}`);
    });
  });
}

function delSpell(req, res, next) {
    Character.findById(req.params.id, function(err, character) {
        character.spells.map(function(spell) {
            if (spell.index == req.params.index) {
                spell.remove();
            }
        });
        character.save(function(err) {
            res.redirect(`/characters/${character._id}`);
        })
    })
}
