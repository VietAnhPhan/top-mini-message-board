const express = require("express");
const db = require("../db");
const messageController = require("../controllers/messageController");

const messageRouter = express.Router();

messageRouter.get("/:message_id", messageController.getMessageDetails);

module.exports = messageRouter;
