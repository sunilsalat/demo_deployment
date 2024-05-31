const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  return res.status(200).json({ msg: "passed" });
});

app.listen(8000, () => {
  console.log("server is running on port 8000...");
});
