var express = require('express');
var router = express.Router();
const lanuages = require('../services/languages');


/* GET languages listing. */
router.get('/', function(req, res, next) {
    try {
        res.json(await languages.getMultiple(req.query.page));
    } catch (err) {
        console.error('Error' + err.message);
        next(err);
    }
});


module.exports = router;
