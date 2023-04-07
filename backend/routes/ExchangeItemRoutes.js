const express = require("express");
const {
  getexchangeItems,
  addexchangeItem,
  updateexchangeItem,
  deleteexchangeItem,
  getsingleexchangeItem,

} = require("../controllers/ExchangeItemController");
const router = express.Router();

router.get("/all", getexchangeItems);

router.get("/:id", getsingleexchangeItem);

router.post("/", addexchangeItem);

router.put("/:id", updateexchangeItem);

router.delete("/:id", deleteexchangeItem);

module.exports = router;