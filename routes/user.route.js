const userRouter = require("express").Router();
const db = require("../db/queries");
const user = require('../controllers/user.controller');

userRouter.get("/", user.userAuthorization);

userRouter.get("/:userName", (req, res) => {
  const { userName } = req.params;

  res.render("index.views.ejs", {
    messages: db.getAllMessages(),
    account: true,
    accountName: userName,
  });
});

module.exports = userRouter;
