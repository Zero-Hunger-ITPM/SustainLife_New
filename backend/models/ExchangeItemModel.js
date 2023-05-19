const mongoose = require("mongoose");

const ExchangeItemSchema = new mongoose.Schema(
  {
    exchangeItemName: {
      type: String,
    },

    exchangeItemPicture: {
      type: String,
      
    },

    exchangeItemLocation: {
      type: String,
      
    },

    exchangeItemContactNo: {
      type: String,
    },

   
  }
)

const ExchangeItemModel = mongoose.model("ExchangeItem", ExchangeItemSchema);

module.exports = ExchangeItemModel;