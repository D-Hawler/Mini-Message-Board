const indexRouter = require("express").Router();
const db = require("../db/queries");

indexRouter.get("/", async (req, res) => {
  const messages = await db.getAllMessages();

  res.render("index.views.ejs", {
    messages,
    account: false,
    accountName: "",
  });
});

module.exports = indexRouter;
