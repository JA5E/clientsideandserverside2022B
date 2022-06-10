var express = require('express');
var router = express.Router();
const languages = require('../services/languages');


/* GET languages listing. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await languages.getMultiple(req.query.page));
    } catch (err) {
        console.error('Error' + err.message);
        next(err);
    }
});

router.post('/', async function(req, res, next) {
    try {
        res.json(await languages.create(req.body));
    } catch (err) {
        console.error('Error while creating a language',err.message);
        next(err);
    }
});


module.exports = router;
