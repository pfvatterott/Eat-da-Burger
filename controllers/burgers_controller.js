const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');
const orm = require('../config/orm.js');



router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        res.render('index', hbsObject);
    })
});

router.post('/api/burgers', (req, res) => {
    console.log(req.body.burger_name)
    burger.insertOne('burger_name', req.body.burger_name, (result) => {
        res.json({ result })
    })
})












module.exports = router;