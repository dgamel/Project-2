const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// INDEX
router.get('/', function(req, res, next) {
  Item.fetchAll().then( (items) => {
    res.status(200).json(items);
  }).catch( (err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
