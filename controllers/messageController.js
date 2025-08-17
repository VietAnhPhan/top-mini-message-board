const db = require("../db/queries");

async function getMessageDetails(req, res) {
  const messageDetails = await db.getMessageDetails(req.params.message_id);

  res.render("messageDetails", {
    title: "Message Detail",
    message: messageDetails,
  });
}

async function createNewMessage(req, res) {
  const username = req.body.authorName;
  const message = req.body.messageText;

  await db.createNewMessage(username, message);

  res.redirect("/");
}

module.exports = { getMessageDetails, createNewMessage };
