var express = require('express');
var swig = require('swig');
swig.setDefaults({cache:false});
var app = express();
var path = require('path');
var Product = require('./category_modules.js');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, 'node_modules')));
app.set('view engine','html');
app.set('views', __dirname + '/views');
app.engine('html',swig.renderFile);

app.use(bodyParser.urlencoded({extended:true}));

app.use(methodOverride('_method'));

var temp;

app.get('/', function (req,res,next){
	res.render('index' , {title: 'title', product:Product.getCatergories()});	
	
})

app.get('/catergories/:name', function (req, res, next){
	temp = req.params.name;
	res.render('catergories', {thecatergory: Product.getItems(req.params.name), product: Product.getCatergories()});
})

app.delete('/catergories/:name', function (req, res, next){
	Product.deleteItem(temp, req.params.name);	
	res.redirect('/');
})

app.post('/catergories/', function(req,res,next){
	Product.addItem(temp, req.body.name);
	res.redirect('/');
})


app.post('/index',function(req,res,next){
	Product.addCatergory(req.body.name);
	res.redirect('/');	
})




app.listen(3000);
