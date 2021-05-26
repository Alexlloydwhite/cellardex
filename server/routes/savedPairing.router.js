const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET users saved pairings
router.get('/', (req,res) => {
    
});

// POST a pairing to the users saved pairings
router.post('/', (req,res) => {
    // SQL query
    const sqlQuery = `INSERT INTO saved_pairing ("pairing_id", "user_id") VALUES ($1,$2);`;
    pool.query(sqlQuery, [req.body.pairing_id, req.body.user_id])
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.log(`In savedPairingRouter. ERROR on post request with SQL query ${sqlQuery}. ERROR: ${err}`);
            res.sendStatus(500);
        });
});

module.exports = router;