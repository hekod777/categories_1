var _data = {

  'hotels': [
    {name: 'the plaza'},
    {name: 'the resort'},
    ],

  'books': [
    {name:'surviving at the top'},
    {name:'the art of come back'}
    ],
};

module.exports = {

  getCategories: function (){
    return Object.keys(_data); //returns an array of keys	
  },

  getProducts: function(name){
    return _data[name]; //return an array of products in the catergory
  },

  addCategory: function(name){
    _data[name] = [];
  },

  addProduct: function(category, name){
    _data[category].push({ name: name });
  },

  deleteCategory: function(name){
    delete _data[name];
  },

  deleteProduct: function (category, idx){
    _data[category].splice(idx, 1);
  }

}
