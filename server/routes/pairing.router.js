const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET all pairings
router.get('/', rejectUnauthenticated, (req, res) => {
  // Query to send to db
  const sqlQuery = `SELECT * FROM pairing 
                    ORDER BY Random() 
                    LIMIT 10;`;

  pool.query(sqlQuery)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log(`IN pairing get router: ${err}`);
      res.sendStatus(500);
    })
});

// Get pairing by ID
router.get('/:id', rejectUnauthenticated, (req,res) => {
  // grab id from request params
  const pairingId = req.params.id;
  console.log(`In get pairing by id router, Id is ${pairingId}`);
  // sql query 
  const sqlQuery = `SELECT * FROM pairing WHERE id=$1`
  // send query to db
  pool.query(sqlQuery, [pairingId])
    .then(result => {
      res.send(result.rows);
      console.log(result.rows);
    })
    .catch(err => {
      console.log(`error making sql query ${sqlQuery}: ${err}`);
      res.sendStatus(500);
    })
});

module.exports = router;
