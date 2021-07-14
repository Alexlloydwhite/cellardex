const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET insights
router.get('/', rejectUnauthenticated, (req, res) => {
    const userId = req.user.id;
    // SQL query to send to DB
    const sqlQuery = `SELECT 
                        ui.id, p.food, p.wine, 
                        ui.wine_drank, ui.enjoyed_with, 
                        ui.image, ui.location, ui.thoughts
                        FROM "user_insights" ui
                        JOIN "user" u ON u.id = ui.user_id
                        JOIN saved_pairing sp ON sp.id = ui.saved_pairing_id
                        JOIN pairing p ON p.id = sp.pairing_id
                        WHERE u.id = $1
                        ORDER BY ui.id;`;
    // Send this query the DB to get insights report for user
    pool.query(sqlQuery, [userId])
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log(`IN get insight router. ERROR on get request: ${err}`);
            res.sendStatus(500);
        });
});

// GET insight with id from params
router.get('/:id', rejectUnauthenticated, (req, res) => {
    // SQL query gets the user insight data based on id of insight edit click & id of user
    const sqlQuery = `SELECT * FROM "user_insights" ui WHERE id=$1 AND ui.user_id=$2;`;
    // send SQL query to the database
    pool.query(sqlQuery, [req.params.id, req.user.id])
        .then(result => {
            console.log(result.rows[0]);
            res.send(result.rows[0]);
        })
        .catch(err => {
            res.sendStatus(500);
            console.log(`IN get insight by ID. ERROR: ${err}`);
        });
});

// POST new insight
router.post('/', rejectUnauthenticated, (req, res) => {
    // SQL query to get the ID of saved pairing.
    const getIdQuery = `SELECT * FROM "saved_pairing" sp WHERE sp.pairing_id = $1;`;
    // first get id of saved_pairing
    pool.query(getIdQuery, [req.body.saved_pairing_id])
        .then(result => {
            const savedPairingId = result.rows[0].id;
            // SQL query to add Insight
            const sqlQuery = `INSERT INTO "user_insights" 
                                ("user_id", 
                                "saved_pairing_id", 
                                "wine_drank", 
                                "thoughts", 
                                "location", 
                                "enjoyed_with", 
                                "image")
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

router.put('/:id', rejectUnauthenticated, (req, res) => {
    // Making const for readability.
    const insightId = req.params.id;
    const userId = req.user.id;
    const wine_drank = req.body.wine_drank;
    const thoughts = req.body.thoughts;
    const location = req.body.location;
    const enjoyed_with = req.body.enjoyed_with;
    const image = req.body.image;
    // Log for bug check
    console.log(`IN insight put router. Editing id ${insightId}`);
    // SQL query
    const sqlQuery = `UPDATE "user_insights" 
                        SET wine_drank=$3, thoughts=$4, location=$5, enjoyed_with=$6, image=$7
                        WHERE id=$1 AND user_id=$2;`;
    pool.query(sqlQuery, [insightId, userId, wine_drank, thoughts, location, enjoyed_with, image])
        .then(() => res.sendStatus(201))
        .catch(err => {
            console.log(`IN insight PUT router. Editing id ${insightId}. !ERROR! ${err}`);
            res.sendStatus(500);
        });
});

// DELETE insight by ID
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log(`IN delete insight Router!`);
    // SQL query to delete insight based on ID
    const sqlQuery = `DELETE FROM "user_insights" WHERE id=$1 AND "user_id"=$2;`;
    // Send query to DB 
    pool.query(sqlQuery, [req.params.id, req.user.id])
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.log(`IN delete insight router. ${err}`);
            res.sendStatus(500);
        });
});

module.exports = router;