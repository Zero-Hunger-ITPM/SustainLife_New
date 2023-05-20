const mongoose = require('mongoose');
const { Schema } = mongoose;

const RegRestaurantSchema = new Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    auto: true
  },
  image: String,
  restaurantName: String,
  addrLine1: String,
  addrLine2: String,
  addrLine3: String,
  city: String,
  telephone: String,
  //category: String,
  email: String,
  password: String,
  //confirmpassword: String
});

const RegRestaurantModel = mongoose.model("RegRestaurantModel", RegRestaurantSchema);
module.exports = RegRestaurantModel;