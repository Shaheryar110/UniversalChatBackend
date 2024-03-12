const express = require("express");
const router = express.Router();
const { create } = require("../controllers/userController");
router.post("/translate", create);

module.exports = router;
