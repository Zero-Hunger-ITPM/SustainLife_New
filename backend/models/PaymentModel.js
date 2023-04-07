const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    paymentType: {
      type: String,
    },

    amount: {
      type: String,
      
    },

    paid: {
      type: Number,
      
    },

    paidBy: {
      type: String,
    },

    UserName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const PaymentModel = mongoose.model("Payment", PaymentSchema);

module.exports = PaymentModel;