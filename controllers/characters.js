const Character = require("../models/character");

const axios = require("axios");

const rootURL = "https://www.dnd5eapi.co/api/spells";

module.exports = {
  index,
  new: newCharacter,
  create,
  show,
  delChar,
  edit,
  update,
};

function index(req, res, next) {
  Character.find({}, function (err, characters) {
    res.render("characters/index", { characters, user: req.user });
  });
}

function newCharacter(req, res, next) {
  res.render("characters/new");
}

function create(req, res, next) {
  req.body.user = req.user._id;
  const character = new Character(req.body);
  character.save(function (err) {
    if (err) return res.render("characters/new");
    res.redirect("/characters");
  });
}

async function show(req, res, next) {
  Character.findById(req.params.id, async function (err, character) {
    let spells = character.spells;
    // console.log(spells);
    let spellInfo = [];
    let promises = [];
    spells.forEach((s) => {
      promises.push(axios.get(`${rootURL}/${s.index}`));
    });
    try {
      let spellInfo = await Promise.all(promises);
      // console.log(spellInfo);
      let finalSpellInfo = [];
      spellInfo.forEach(function (s) {
        finalSpellInfo.push(s.data);
      });

      finalSpellInfo.sort(function (a, b) {
        console.log(a.index, b.index);
        let textA = a.name.toUpperCase();
        let textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      spellInfo = spellInfo.data;
      return res.render("characters/show", {
        character,
        spellInfo: finalSpellInfo,
      });
    } catch (err) {
      console.log(err);
    }
  });
}

function delChar(req, res, next) {
  Character.findById(req.params.id, function (err, character) {
    character.remove();
    res.redirect("/characters");
  });
}

function edit(req, res, next) {
  Character.findById(req.params.id, function (err, character) {
    res.render("characters/edit", { character });
  });
}

function update(req, res, next) {
  Character.findByIdAndUpdate(req.params.id, req.body, function (
    err,
    character
  ) {
    if (err) {
      console.log(err);
    }
    res.redirect(`/characters/${character._id}`);
  });
}
