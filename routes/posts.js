var express = require('express');
var router = express.Router();
const blog = require('../services/blog');

/* GET posts listing. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await blog.getPosts(req.query.page));
    } catch (err) {
        console.error('Error' + err.message);
        next(err);
    }
});

module.exports = router;
