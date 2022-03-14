const express = require("express");
const mongoose = require("mongoose");

const app = express();
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://NayanIngale:nayan123@test.wjg1r.mongodb.net/test"
  );
};

app.listen(5000, async () => {
  try {
    await connect();
    console.log("listening on port 5000...");
  } catch (error) {
    console.log("error:", error);
  }
});
