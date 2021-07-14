const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:search', rejectUnauthenticated, (req, res) => {
    // grab search form the req params
    const search = req.params.search;
    console.log(`~Searching For~ ${search}`);
    // SQL query to get search results
    // Search is sent in upper case and compared to database, also uppercase
    // This allows us to return results regardless of case
    const sqlQuery = `SELECT * FROM pairing
                        WHERE UPPER ("food") LIKE UPPER('%' || $1 || '%');`;
    // Send query to the database
    pool.query(sqlQuery, [search])
        .then((result) => res.send(result.rows))
        .catch(err => {
            console.log(`IN search router. !~ERROR~! ${err}`);
            res.sendStatus(500);
        });
});

module.exports = router;