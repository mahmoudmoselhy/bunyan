// dotenv
// require express
// middleware json
// simple logger
// db connect
// route test
// port
// run server

require("dotenv").config();

const express = require("express");

const app = express();

// middleware
app.use(express.json());

// simple logger
if (process.env.NODE_ENV === "dev") {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  });
}

// test route
app.get("/test", (req, res) => {
  res.status(200).json({ message: "test route" });
});

const conectedDB = require("./config/DB")

// port
const PORT = process.env.PORT || 5000;

// run server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});