const express = require("express");
const messages = require("../db");

const sendingMessageRouter = express.Router();

sendingMessageRouter.get("/", (req, res) => {
  res.render("newMessage", { heading: "Send new message" });
});

sendingMessageRouter.post("/", (req, res) => {
  {
    messages.push({
      text: req.body.messageText,
      user: req.body.authorName,
      added: new Date(),
    });

    res.redirect("/");
  }
});

module.exports = sendingMessageRouter;
