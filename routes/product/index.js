const Product = require('../../models/product');
const router = require('express').Router();


router.get('/', function(req, res) {
  Product.fetchAll().then((products) => {
    res.json(products);
  })
})
