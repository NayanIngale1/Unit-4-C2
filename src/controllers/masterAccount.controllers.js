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
      
      return res.status(200).send(masterAccounts);
  } catch (error) {
    return res.status(500).send({ Error: error.message });
  }
});


app.get('/:id/userId', async (req, res) => {
    try {
        const details = await MasterAccount.findById({ userId: req.params.userId },{_id:1,balance:1}).lean().exec();
        return res.status(200).send(details);
    } catch (error) {
        return res.status(500).send({ Error: error.message });
    }
}])

module.exports = app;
