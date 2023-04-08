const express = require("express");
const {
    addOrgan,
    getOrgan,
    getsingleOrgan,
    updateOrgan,
    removeOrgan,

} = require("../controllers/OrganController");
const router = express.Router();

router.get("/all", getOrgan);

router.get("/:id", getsingleOrgan);

router.post("/", addOrgan);

router.put("/:id",updateOrgan);

router.delete("/:id",removeOrgan);

module.exports = router;