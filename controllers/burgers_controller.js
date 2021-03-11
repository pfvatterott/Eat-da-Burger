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
    console.log(req.body.burger_choice)
    burger.insertOne('burger_name', req.body.burger_choice, (result) => {
        res.json({ id: result.insertId })
    })
})












module.exports = router;