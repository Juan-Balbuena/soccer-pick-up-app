const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/game', (req, res) => {
    console.log('GET /api/game');
    pool.query('SELECT * FROM "game" WHERE "user_id" = $1 ;', [req.user.id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/game', error)
        res.sendStatus(500);
    }) 
});


/**
 * POST route template
 */
router.post('/game', (req, res) => {
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