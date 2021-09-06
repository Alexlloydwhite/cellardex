const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// GET users saved pairings
router.get("/", rejectUnauthenticated, (req, res) => {
  // id of user getting saved pairings
  const userId = req.user.id;
  // SQL query
  const sqlQuery = `SELECT p.id, p.food, p.wine, p.description FROM saved_pairing sp
                        JOIN pairing p ON p.id = sp.pairing_id
                        JOIN "user" u ON u.id=sp.user_id
                        WHERE u.id = $1;`;
  pool
    .query(sqlQuery, [userId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(
        `IN savedPairing router, ERROR getting saved pairings for user ${userId}. ERROR: ${err}`
      );
    });
});

// POST a pairing to the users saved pairings
router.post("/", rejectUnauthenticated, (req, res) => {
  // SQL query
  const sqlQuery = `INSERT INTO saved_pairing ("pairing_id", "user_id") VALUES ($1,$2);`;
  pool
    .query(sqlQuery, [req.body.pairing_id, req.body.user_id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(
        `In savedPairingRouter. ERROR on post request with SQL query ${sqlQuery}. ERROR: ${err}`
      );
      res.status(500).send({ message: "Hello From The Server!" });
    });
});

router.delete("/:id", rejectUnauthenticated, (req, res) => {
  const pairingId = req.params.id;
  const userId = req.user.id;
  const sqlQuery = `DELETE FROM saved_pairing WHERE pairing_id = $1 AND user_id = $2;`;
  pool
    .query(sqlQuery, [pairingId, userId])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(`IN api/pairing/delete-pairing, ${err}`);
      res.sendStatus(500);
    });
});

module.exports = router;
