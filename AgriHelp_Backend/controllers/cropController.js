const { predictCrop } = require("../models/cropModel");

exports.cropRecommendation = (req, res) => {
  const {
    nitrogen,
    phosphorous,
    potassium,
    ph,
    rainfall,
    temperature,
    humidity,
  } = req.body;
  const prediction = predictCrop(
    nitrogen,
    phosphorous,
    potassium,
    ph,
    rainfall,
    temperature,
    humidity
  );
  res.json({ prediction });
};
