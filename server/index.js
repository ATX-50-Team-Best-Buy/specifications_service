const express = require("express");
const app = express();
const port = 2019;
const cors = require("cors");

//requirements

// use
app.use(express.json());
app.use(cors());

// server routing
app.get("/", (req, res) => {
  res.send("Hello World");
});

// listening
app.listen(port, () => {
  console.log(`productInfo-photos_service listening at ${port}`);
});
