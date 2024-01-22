const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('GET /api/game hello');
    pool.query('SELECT * FROM "game" WHERE "user_id" = $1 ;', [req.user.id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/game', error)
        res.sendStatus(500);
    })
});

router.get('/:id', (req, res) => {
    console.log('GET /api/game/:id');
    pool.query('SELECT * FROM "game" WHERE "user_id" = $1 and "id" = $2;', [req.user.id, req.params.id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/game', error)
        res.sendStatus(500);
    })
});



/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log('in POST', req.body)
    const newGame = req.body;
    const queryText = `INSERT INTO "game" ("user_id", "created_by", "location", "date")
                        VALUES ($1, $2, $3, $4)`;
    const queryValues = [
        req.user.id,
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

router.put('/:id', (req, res) => {
    const editGame = req.body;
    console.log('editGame', editGame);
    const gameId = req.params.id;
    console.log('in PUT route', editGame, gameId);
    const queryText = `UPDATE "game" 
                       SET "user_id" = $2, "created_by" = $3,
                        "location" = $4,
                        "date" = $5
                        WHERE "id" = $1; `;
    const queryValues = [
        editGame.id,
        req.user.id,
        editGame.created_by,
        editGame.location,
        editGame.date,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201) })
        .catch((e) => {
            console.error('error in PUT router', e)
            res.sendStatus(500);
        })
})

router.delete('/:id', (req, res) => {
    console.log(req.body);
    let queryText = `DELETE FROM "game" WHERE id = $1;`;
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(201) })
        .catch((e) => {
            console.error('error in delete router', e)
            res.sendStatus(500);
        })
})



module.exports = router;