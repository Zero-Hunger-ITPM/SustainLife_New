const ExchangeItem = require("../models/ExchangeItemModel");

const addexchangeItem = (req, res) => {
  const {
    exchangeItemName,
    exchangeItemPicture,
    exchangeItemLocation,
    exchangeItemContactNo,
  } = req.body;

  console.log(req.body);

  const newExchangeItem = new ExchangeItem({
    exchangeItemName,
    exchangeItemPicture,
    exchangeItemLocation,
    exchangeItemContactNo,
  });

  newExchangeItem
    .save()
    .then((createdExchangeItem,) => {
      res.status(200).json(createdExchangeItem);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getexchangeItems = async (req, res) => {
  try {
    const exchangeItem = await ExchangeItem.find();

    res.status(200).json(exchangeItem);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsingleexchangeItem = async (req, res) => {
  try {
    const id = req.params.id;
    const exchangeItem = await ExchangeItem.findById(id);
    res.status(200).json(exchangeItem);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateexchangeItem = async (req, res) => {
  const exchangeItemId = req.params.id;

  try {
    const exchangeItem= await ExchangeItem.findById(exchangeItemId);

    if(!exchangeItem){
      return res.status(404).json("There is  no Items");
    }

    const {exchangeItemName,exchangeItemPicture,exchangeItemLocation,exchangeItemContactNo} = req.body;
    
    const exchangeIte = await ExchangeItem.findByIdAndUpdate(exchangeItemId, {exchangeItemName,exchangeItemPicture,exchangeItemLocation,exchangeItemContactNo});

    res.status(201).json({
      "Updated": true
    })

  } catch (error) { 
    res.status(400).json(error.message);
  }
}

const deleteexchangeItem = async (req, res) => {
  const exchangeItemId = req.params.id;

  try {
    const exchangeItem = await ExchangeItem.findById(exchangeItemId);

    if(!exchangeItem){
      return res.status(404).json("There is no Items");
    }

    const deleteexchangeItem = await ExchangeItem.findByIdAndDelete(exchangeItem);
    res.status(200).json(deleteexchangeItem);
    
  } catch (error) { 
    res.status(400).json(error.message);
  }
}

module.exports = {
  addexchangeItem,
  getexchangeItems,
  getsingleexchangeItem,
  updateexchangeItem,
  deleteexchangeItem,
};