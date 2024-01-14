const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * POST route template
 */
router.post('/', (req, res) => {
    const newGame = req.body;
    const queryText = `INSERT INTO "game" ("created_by", "location", "date")
                        VALUES ($1, $2, $3)`;
    const queryValues = [
      newGame.created_by,
      newGame.location,
      newGame.date,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error in completeing SELECT game query', err);
        res.sendStatus(500);
      });                    
  });



module.exports = router;