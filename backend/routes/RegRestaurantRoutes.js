const express = require("express");
const {
  getrestaurant,
  regRestaurant,
  updateRestaurant,
  removeRestaurant,
  getsinglerestaurant,
  login
} = require("../controllers/RegRestaurantController");
const router = express.Router();

router.get("/all", getrestaurant);

router.post("/login", login);

router.get("/:id", getsinglerestaurant);

router.post("/", regRestaurant);

router.put("/:id",updateRestaurant);

router.delete("/:id",removeRestaurant);

module.exports = router;