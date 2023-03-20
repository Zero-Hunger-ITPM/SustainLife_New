const express = require("express");
const {
  getproduct,
  addProduct,
  updateProduct,
  removeProduct,
  getsingleproduct,

} = require("../controllers/AddProductsController");
const router = express.Router();

router.get("/all", getproduct);

router.get("/:id", getsingleproduct);

router.post("/", addProduct);

router.put("/:id",updateProduct);

router.delete("/:id",removeProduct);

module.exports = router;