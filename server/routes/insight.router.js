const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET insights
router.get('/', (req,res) => {
    const userId = req.user.id;
    // SQL query to send to DB
    const sqlQuery = `SELECT ui.id, p.food, p.wine, ui.wine_drank, ui.enjoyed_with, ui.image, ui.location, ui.thoughts
                        FROM "user_insights" ui
                        JOIN "user" u ON u.id = ui.user_id
                        JOIN saved_pairing sp ON sp.id = ui.saved_pairing_id
                        JOIN pairing p ON p.id = sp.pairing_id
                        WHERE u.id = $1;`;
    // Send this query the DB to get insights report for user
    pool.query(sqlQuery, [userId])
        .then(result => {
            res.send(result.rows)
        })
        .catch(err => {
            console.log(`IN get insight router. ERROR on get request: ${err}`);
            res.sendStatus(500);
        })
})

// POST new insight
router.post('/', (req, res) => {
    // SQL query to get the ID of saved pairing.
    const getIdQuery = `SELECT * FROM "saved_pairing" sp WHERE sp.pairing_id = $1;`;
    // first get id of saved_pairing
    pool.query(getIdQuery, [req.body.saved_pairing_id])
        .then(result => {
            const savedPairingId = result.rows[0].id;
            // SQL query to add Insight
            const sqlQuery = `INSERT INTO "user_insights" ("user_id", "saved_pairing_id", "wine_drank", "thoughts", "location", "enjoyed_with", "image")
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
});

router.delete('/:id', (req,res) => {
    console.log(`IN delete insight Router!`);
    // SQL query to delete insight based on ID
    const sqlQuery = `DELETE FROM "user_insights" WHERE id=$1;`;
    // Send query to DB 
    pool.query(sqlQuery, [req.params.id])
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.log(`IN delete insight router. ${err}`);
            res.sendStatus(500);
        })
})

module.exports = router;