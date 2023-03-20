const Product = require("../models/AddProductsModel");
const Payment = require("../models/PaymentModel");
const Order = require("../models/OrderModel");

const fetchAllProducts = (req, res) => {
  Product.find({}, (err, docs) => {
    if (!err) {
      res.status(200).json({ products: docs });
    } else {
      res.status(500).json({ error: err });
      throw err;
    }
  });
};

const fetchProductsByLocation = (req, res) => {
  Product.find({ category: req.params.location }, (err, docs) => {
    if (!err) {
      res.status(200).json({ products: docs });
    } else {
      res.status(500).json({ error: err });
      throw err;
    }
  });
};


const getSingleItem = (req, res) => {
  console.log(req.params.pid);
  Product.findById(req.params.pid, (err, data) => {
    if (err) return res.status(401).json({ product: "not found" });

    res.status(200).json({ product: data });
  });
};

const createOrder = (req, res) => {
  Order.create(req.body, (err, data) => {
    if (err) res.status(500).json({ error: err });
    res.status(201).json(data);
  });
};

const getOrders = (req, res) => {
  Order.find({}, (err, docs) => {
    if (!err) {
      res.status(200).json({ orders: docs });
    } else {
      res.status(500).json({ error: err });
      throw err;
    }
  });
};

const getSingleOrder = (req, res) => {
  console.log(req.params.id);
  Order.findById(req.params.id, (err, data) => {
    if (err) return res.status(401).json({ product: "not found" });

    res.status(200).json({ order: data });
  });
};

const createPayment = (req, res) => {
  Payment.create(req.body, (err, data) => {
    if (err) res.status(500).json({ error: err });
    res.status(201).json(data);
  });
};

const getPayments = (req, res) => {
  Payment.find({}, (err, docs) => {
    if (!err) {
      res.status(200).json({ payments: docs });
    } else {
      res.status(500).json({ error: err });
      throw err;
    }
  });
};

module.exports = {
  fetchAllProducts,
  fetchProductsByLocation,
  getSingleItem,
  createOrder,
  createPayment,
  getSingleOrder,
  getOrders,
  getPayments,
};