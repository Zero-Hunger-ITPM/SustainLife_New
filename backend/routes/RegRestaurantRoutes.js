const express = require("express");
const {
  getrestaurant,
  regRestaurant,
  updateRestaurant,
  removeRestaurant,
  getsinglerestaurant,

} = require("../controllers/RegRestaurantController");
const router = express.Router();

router.get("/all", getrestaurant);

router.get("/:id", getsinglerestaurant);

router.post("/", regRestaurant);

router.put("/:id",updateRestaurant);

router.delete("/:id",removeRestaurant);

module.exports = router;