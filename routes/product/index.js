const Product = require('../../models/product');
const Transaction = require('../../models/transaction');
const router = require('express').Router();

// INDEX
router.get('/', function(req, res, next) {
  Product.fetchAll().then( (products) => {
    res.status(200).json(products);
  }).catch( (err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// SHOW
router.get('/:id', function(req, res, next) {
  Product.where({id: req.params.id}).fetch ().then( (product) => {
    if (!product) {

      res.status(404).json({ message: 'Product not found'});
    }
    else {
      res.status(200).json(product);
    }
  }).catch( (err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
