var express = require("express");
var router = express.Router();
const passport = require("passport");
const request = require("request");

const rootURL = "https://www.dnd5eapi.co/api/spells";

/* GET home page. */
router.get("/", function (req, res, next) {
  request(`${rootURL}`, 
  function (err, response, body) {
    const spellData = JSON.parse(body);
    res.render("index", { spellData });
  });
});
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/users",
    failureRedirect: "/",
  })
);
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
