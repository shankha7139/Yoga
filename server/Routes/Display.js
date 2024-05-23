const express = require("express");
const router = express.Router();

router.post("/members", (req, res) => {
  try {
    res.send([global.members]);
  } catch (error) {
    console.error(error.message);
    res.send("server error");
  }
});

module.exports = router;