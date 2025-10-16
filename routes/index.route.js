const indexRouter = require("express").Router();

const messages = {};

indexRouter.get("/", (req, res) => {
  res.render("index.views.ejs", {
    messages: messages,
    account: false,
    accountName: "",
  });
});

module.exports = indexRouter;
