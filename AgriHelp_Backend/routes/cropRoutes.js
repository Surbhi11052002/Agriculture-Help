const express = require("express");
const router = express.Router();
const cropController = require("../controllers/cropController");

router.post("/crop-recommendation", cropController.cropRecommendation);

module.exports = router;
