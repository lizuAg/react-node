const express = require("express");
const app = express();
const port = 5000;

//user pw 특수기호 없게 바꿔야함 !!!
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://jueun:jueun1234@reactstudy.bcqmi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {}
  )
  .then(() => console.log("MogoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
