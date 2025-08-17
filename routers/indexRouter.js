const express = require("express");
const messages = require("../db");
const indexController = require("../controllers/indexController");

const indexRouter = express.Router();

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
// ];

indexRouter.get("/", indexController.getAllMessages);

module.exports = indexRouter;
