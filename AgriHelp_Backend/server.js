const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Import routes
const cropRoutes = require("./routes/cropRoutes");
const diseaseRoutes = require("./routes/diseaseRoutes");
const fertilizerRoutes = require("./routes/fertilizerRoutes");

// Use routes
app.use("/", cropRoutes);
app.use("/", diseaseRoutes);
app.use("/", fertilizerRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
