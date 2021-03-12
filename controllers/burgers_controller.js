const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');



router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        res.render('index', hbsObject);
    })
});

router.post('/api/burgers', (req, res) => {
    console.log(req.body.burgerName)
    burger.insertOne('burger_name', req.body.burgerName, (result) => {
        res.json({ id: result.insertId })
    })
})












module.exports = router;