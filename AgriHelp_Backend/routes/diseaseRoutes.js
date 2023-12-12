const express = require("express");
const router = express.Router();
const diseaseController = require("../controllers/diseaseController");

router.post("/disease-detection", diseaseController.diseaseDetection);

module.exports = router;
