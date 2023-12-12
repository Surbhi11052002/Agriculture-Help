const { detectDisease } = require("../models/diseaseModel");

exports.diseaseDetection = async (req, res) => {
  const { file } = req.body;
  const prediction = await detectDisease(file);
  res.json({ prediction });
};
