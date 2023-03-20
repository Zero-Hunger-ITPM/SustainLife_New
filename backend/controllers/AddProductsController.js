const Product = require("../models/AddProductsModel");

const addProduct = (req, res) => {
  const {
    image,
    productName,
    regularPrice,
    discountRate,
    discountedPrice,
    dOM,
    dOE,
    restaurant,
    location,
  } = req.body;

  console.log(req.body);

  const newProduct = new Product({
    image,
    productName,
    regularPrice,
    discountRate,
    discountedPrice,
    dOM,
    dOE,
    restaurant,
    location,
  });

  newProduct
    .save()
    .then((createdProduct) => {
      res.status(200).json(createdProduct);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getproduct = async (req, res) => {
  try {
    const product = await Product.find();

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsingleproduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product= await Product.findById(productId);

    if(!product){
      return res.status(404).json("There is a no Products");
    }

    const {image,productName,regularPrice,discountRate,discountedPrice,dOM,dOE,restaurant,location} = req.body;
    
    const produc = await Product.findByIdAndUpdate(productId, {image,productName,regularPrice,discountRate,discountedPrice,dOM,dOE,restaurant,location});

    res.status(201).json({
      "Updated": true
    })

  } catch (error) { 
    res.status(400).json(error.message);
  }
}

const removeProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);

    if(!product){
      return res.status(404).json("There is a no Products");
    }

    const removeProduct = await Product.findByIdAndDelete(productId);
    res.status(200).json(removeProduct);
    
  } catch (error) { 
    res.status(400).json(error.message);
  }
}

module.exports = {
  addProduct,
  getproduct,
  getsingleproduct,
  updateProduct,
  removeProduct,
};