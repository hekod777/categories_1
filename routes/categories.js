var app = require('express').Router();
var db = require('../db');

module.exports = app;

app.get('/:name', function (req, res, next){
	res.render('categories', {
    categories: db.getCategories(),
    products: db.getProducts(req.params.name), 
    category: req.params.name
  });
})

app.delete('/:name', function (req, res, next){
	db.deleteCategory(req.params.name);	
	res.redirect('/');
})

app.post('/:name/products', function(req,res,next){
	db.addProduct(req.params.name, req.body.name);
	res.redirect('/categories/' + req.params.name);
})

app.post('/',function(req,res,next){
	db.addCategory(req.body.name);
	res.redirect('/categories/' + req.body.name);	
})

app.delete('/:name/products/:idx', function (req, res, next){
	db.deleteProduct(req.params.name, req.params.idx);
	res.redirect('/categories/' + req.params.name);
})
