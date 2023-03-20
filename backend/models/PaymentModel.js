const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    paymentType: {
      type: String,
    },

    amount: {
      type: String,
      required: true,
    },

    paid: {
      type: Boolean,
      required: true,
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

const PaymentModel = mongoose.model("PaymentModel", PaymentSchema);

module.exports = PaymentModel;