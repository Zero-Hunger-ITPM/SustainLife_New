const express = require("express");
const {
  fetchAllProducts,
  fetchProductsByLocation,
  getSingleItem,
  createOrder,
  createPayment,
  getSingleOrder,
  getOrders,
  getPayments,
} = require("../controllers/OrderPaymentController");

const router = express.Router();

router.get("/products", fetchAllProducts);
router.get("/products/:location", fetchProductsByLocation);
router.get("/product/:pid", getSingleItem);
router.post("/", createOrder);
router.get("/all", getOrders);
router.get("/:id", getSingleOrder);
router.post("/", createPayment);
router.get("/all", getPayments);

module.exports = router;