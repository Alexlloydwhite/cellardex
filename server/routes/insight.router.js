const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// POST new insight
router.post('/', (req, res) => {
    console.log(req.body);
    // SQL query
    const getIdQuery = `SELECT * FROM "saved_pairing" sp WHERE sp.pairing_id = $1;`;
    // first get id of saved_pairing
    pool.query(getIdQuery, [req.body.saved_pairing_id])
        .then(result => {
            const savedPairingId = result.rows[0].id;
            // SQL query to add Insight
            const sqlQuery = `INSERT INTO "user_insights" ("user_id", "saved_pairing_id", "wine", "thoughts", "location", "enjoyed_with", "image")
            VALUES ($1,$2,$3,$4,$5,$6,$7);`;
            // now use the saved pairing id to add new insight
            pool.query(sqlQuery, [
                req.body.user_id,
                savedPairingId,
                req.body.wine,
                req.body.thoughts,
                req.body.location,
                req.body.enjoyed_with,
                req.body.image
            ]).catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
})

module.exports = router;