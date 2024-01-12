const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('GET /api/game');
  pool.query('SELECT * FROM "game" WHERE "user_id" = $1 ;', [req.user.id]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error Get /api/game', error)
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
