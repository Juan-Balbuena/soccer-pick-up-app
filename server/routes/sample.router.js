const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('GET /api/sample');
  pool.query('SELECT * FROM "sample" WHERE "user_id" = $1 ;', [req.user.id]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error Get /api/sample', error)
    res.sendStatus(500);
  })
});



module.exports = router;
