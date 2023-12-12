const { recommendFertilizer } = require("../models/fertilizerModel");

exports.fertilizerRecommendation = (req, res) => {
  const {
    soilType,
    cropType,
    moisture,
    nitrogen,
    phosphorus,
    potassium,
    city,
  } = req.body;
  const result = recommendFertilizer(
    soilType,
    cropType,
    moisture,
    nitrogen,
    phosphorus,
    potassium,
    city
  );
  res.json({ data: result });
};
