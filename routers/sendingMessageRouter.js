const express = require("express");
const messages = require("../db");
const messageController = require("../controllers/messageController");

const sendingMessageRouter = express.Router();

sendingMessageRouter.get("/", (req, res) => {
  res.render("newMessage", { heading: "Send new message" });
});

// sendingMessageRouter.post("/", (req, res) => {
//   {
//     messages.push({
//       text: req.body.messageText,
//       user: req.body.authorName,
//       added: new Date(),
//     });

//     res.redirect("/");
//   }
// });

sendingMessageRouter.post("/", messageController.createNewMessage);

module.exports = sendingMessageRouter;
