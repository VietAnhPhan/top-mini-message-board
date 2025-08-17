const express = require("express");
const path = require("path");
const indexRouter = require("./routers/indexRouter");
const sendingMessageRouter = require("./routers/sendingMessageRouter");
const messageRouter = require("./routers/messageRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", sendingMessageRouter);
app.use("/messages", messageRouter);

const PORT = 8080;
app.listen(PORT, "::", () =>
  console.log(`Mini message board run on PORT: ${PORT}`)
);
