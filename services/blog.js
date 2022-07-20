const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getPosts(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, title, content, author, category, date, img 
        FROM posts LIMIT ${offset}, ${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    };
}

async function getComments(page = 1, id){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, content, author, date
        FROM comments
        WHERE post_id = ${id.id}
        LIMIT ${offset}, ${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    };
}

module.exports = {
    getPosts, getComments
};