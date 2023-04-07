const Restaurant = require("../models/RegRestaurantModel");
var bcrypt = require('bcryptjs'); 

const regRestaurant= async (req, res) => {
  const {
    image,
    restaurantName,
    addrLine1,
    addrLine2,
    addrLine3,
    city,
    telephone,
    category,
    email,
    password,
    confirmpassword,
  } = req.body;

  console.log(req.body);

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt); 
  const newRestaurant = new Restaurant({
    image,
    restaurantName,
    addrLine1,
    addrLine2,
    addrLine3,
    city,
    telephone,
    category,
    email,
    password: hash,
    confirmpassword,
   
  });
 
  newRestaurant
    .save()
    .then((createdRestaurant) => {
      res.status(200).json(createdRestaurant);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getrestaurant = async (req, res) => {
  try {
    const restaurant= await Restaurant.find();

    res.status(200).json(restaurant);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsinglerestaurant = async (req, res) => {
  try {
    const id = req.params.id;
    const restaurant = await Restaurant.findById(id);
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateRestaurant = async (req, res) => {
  const restaurantId = req.params.id;

  try {
    const restaurant = await Restaurant.findById(restaurantId);

    if(!restaurant){
      return res.status(404).json("There is a no Restaurant");
    }

    const {image,restaurantName,addrLine1,addrLine2,addrLine3,city,telephone,category,email,password,confirmpassword} = req.body;
    
    const restauran = await Restaurant.findByIdAndUpdate(restaurantId, {image,restaurantName,addrLine1,addrLine2,addrLine3,city,telephone,category,email,password,confirmpassword});

    res.status(201).json({
      "Updated": true
    })

  } catch (error) { 
    res.status(400).json(error.message);
  }
}

const removeRestaurant = async (req, res) => {
  const restaurantId = req.params.id;

  try {
    const restaurant = await Restaurant.findById(restaurantId);

    if(!restaurant){
      return res.status(404).json("There is a no Restaurant");
    }

    const removeRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
    res.status(200).json(removeRestaurant);
    
  } catch (error) { 
    res.status(400).json(error.message);
  }
}

const login = async(req, res) => {
  const hotelEmail = req.body.email;
  const hotelPAssword = req.body.password;
  console.log("hotelEmail", hotelEmail);
  console.log("hotelPAssword", hotelPAssword);

  try {
    const restaurant = await Restaurant.find({email:hotelEmail });
    console.log("restaurant", restaurant[0]);
    const isValidPassword =  bcrypt.compareSync(hotelPAssword, restaurant[0].password); 
   
    if(restaurant && isValidPassword){
      return res.status(200).json("Logged in successful!");
    }else {
      return res.status(403).json("Email or password is incorrect!");
    } 
  } catch (error) { 
    res.status(400).json(error.message);
  } 
}

module.exports = {
  regRestaurant,
  getrestaurant,
  getsinglerestaurant,
  updateRestaurant,
  removeRestaurant,
  login
};