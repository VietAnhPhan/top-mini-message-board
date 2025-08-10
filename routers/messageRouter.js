const express = require("express");
const db = require("../db");
const messageRouter = express.Router();

messageRouter.get("/:message_id", (req, res) => {
  res.render("messageDetails", {
    title: "Message Detail",
    message: db[req.params.message_id],
  });
});

module.exports = messageRouter;
