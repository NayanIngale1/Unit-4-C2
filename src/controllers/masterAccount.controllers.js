const express = require("express");

const app = express();

const MasterAccount = require("../modules/masterAccount.module");

app.get("/", async (req, res) => {
  try {
    const masterAccounts = await MasterAccount.find({})
      .permute({ path: "branchId", select: ["name"] })
      .permute({ path: "userId", select: ["firstName", "lastName", "email"] })
      .permute({
        path: "managerId",
        select: ["firstName", "lastName"],
      })
      .lean()
      .exec();
  } catch (error) {
    return res.status(500).send({ Error: error.message });
  }
});

module.exports = app;
