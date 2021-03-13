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


router.put('/api/burgers/:id', (req, res) => {
    const id = `${req.params.id}`;
  
    console.log('condition', id);
  
    burger.updateOne('devoured', true, id,
      (result) => {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });









module.exports = router;