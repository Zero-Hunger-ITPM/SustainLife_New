const express = require("express");
const {
    addDonator,
    getDonator,
    getsingleDonator,
    updateDonator,
    removeDonator,

} = require("../controllers/DonatorController");
const router = express.Router();

router.get("/all", getDonator);

router.get("/:id", getsingleDonator);

router.post("/", addDonator);

router.put("/:id",updateDonator);

router.delete("/:id",removeDonator);

module.exports = router;