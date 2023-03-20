const mongoose = require('mongoose')

const AddProductsSchema = mongoose.Schema({
   image:String,
   productName:String,
   regularPrice:String,
   discountRate:String,
   discountedPrice:String,
   dOM:String,
   dOE:String,
   restaurant:String,
   location:String,
     
});

const AddProductsModel = mongoose.model("AddProductsModel", AddProductsSchema);
module.exports = AddProductsModel;