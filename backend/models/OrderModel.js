const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    address1: {
      type: String,
      required: true,
    },

    address2: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    /*product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "AddProductsModel",
    },*/

    quantity: {
      type: String,
    },

    total: {
      type: String,
    },

   /* user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      //ref: "AppUser",
    },*/
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model("OrderModel", OrderSchema);

module.exports = OrderModel;