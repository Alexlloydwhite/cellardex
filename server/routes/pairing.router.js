const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all pairings
router.get('/', (req, res) => {
  // Query to send to db
  const sqlQuery = `SELECT * FROM pairing ORDER BY Random();`;

  pool.query(sqlQuery)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log(`IN pairing get router: ${err}`);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
