var express = require('express');
var router = express.Router();
const blog = require('../services/blog');

/* GET posts listing. */

router.put('/', async function(req, res, next) {
    try {
        res.json(await blog.getComments(req.query.page,req.body));
    } catch (err) {
        console.error('Error' + err.message);
        next(err);
    }
});


module.exports = router;