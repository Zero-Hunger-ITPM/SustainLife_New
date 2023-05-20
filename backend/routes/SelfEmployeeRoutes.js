const express = require("express");
const {
  getEmployee,
  addEmployee,
  updateEmployee,
  removeEmployee,
  getsingleemployee,

} = require("../controllers/SelfEmployeeController");
const router = express.Router();

router.get("/all", getEmployee);

router.get("/:id", getsingleemployee);

router.post("/", addEmployee);

router.put("/:id",updateEmployee);

router.delete("/:id",removeEmployee);

module.exports = router;