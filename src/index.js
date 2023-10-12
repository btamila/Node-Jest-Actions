const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome Node Actions." });
});

// set port, listen for requests
const PORT = process.env.PORT || 6999;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
