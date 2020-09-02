const Character = require('../models/character');

module.exports = {
    index
};

function index(req, res, next) {
    res.render('characters/index', {title: 'Your Characters'});
}