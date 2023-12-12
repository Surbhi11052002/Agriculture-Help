const express = require("express");
const router = express.Router();
const fertilizerController = require("../controllers/fertilizerController");

router.post(
  "/fertilizer-recommendation",
  fertilizerController.fertilizerRecommendation
);

module.exports = router;
