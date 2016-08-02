var product = {

'hotels': [
	{name: 'the plaza'},
	{name: 'the resort'},
	],

'books': [
	{name:'surviving at the top'},
	{name:'the art of come back'}
	],
}

module.exports = {

getCatergories: function (){
	return Object.keys(product); //returns an array of keys	
},

getItems: function(catergory){
	return product[catergory]; //return an array of products in the catergory
},

addCatergory: function(name){
	product[name] = [];
},

addItem: function(catergory,name){
	product[catergory].push({name:name});
},



deleteCatergory: function(name){
	delete product[name];
	
},

deleteItem: function (catergory,name){
	var dead = this.getItems(catergory).filter(function(item){return item.name == name});
	var ind = this.getItems(catergory).indexOf(dead[0]);
	this.getItems(catergory).splice(ind,1);
},

}