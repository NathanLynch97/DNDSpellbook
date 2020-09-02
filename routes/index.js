var express = require("express");
var router = express.Router();
const passport = require("passport");
const axios = require("axios");
const request = require('request');

const rootURL = "https://www.dnd5eapi.co/api/spells";

/* GET home page. */
router.get("/", function (req, res, next) {
  // request(`${rootURL}`, function (err, response, body) {
  //   const spellData = JSON.parse(body);
  //   res.render("index", { spellData });
  // });
  axios.get(`${rootURL}`).then(function(response) {
    console.log(response);
    spellData = response.data.results;
    res.render('index', {spellData});
  })
});

// GET Spell show page


router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/characters",
    failureRedirect: "/",
  })
);
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/:index", function (req, res, next) {
  // axios.get(`${rootURL}/${req.params.index}`).then(function (response, body) {
  //   const spell = JSON.parse(body);
  //   res.render("show", { spell });
  // }).catch(function(error) {
  //   console.log(error);
  // });
  axios.get(`${rootURL}/${req.params.index}`).then(function(response) {
    console.log(response.data);
    res.render('show', {spell: response.data});
  })
});

module.exports = router;
