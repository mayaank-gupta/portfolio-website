var express = require("express");
var router = express.Router();
const safePromise = require("../utilities").safePromise;
const fetchDialog = require("../helpers").fetchDialog;

router.post("/", async function (req, res, next) {
  let payload = req.body;
  let [err, data] = await safePromise(fetchDialog(payload));

  if (err) {
    return res.json({
      success: false,
      msg: "Something went wrong.",
    });
  }

  if (data) {
    return res.json({
      success: true,
      msg: "Success",
      chatText: data,
    });
  }
});

module.exports = router;
