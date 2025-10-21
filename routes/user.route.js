const userRouter = require("express").Router();
const db = require("../db/queries");
const user = require("../controllers/user.controller");

userRouter.get("/", user.userAuthorization);
userRouter.post("/", user.userAddComment);

userRouter.get("/:userName", async (req, res) => {
  const { userName } = req.params;
  const messages = await db.getAllMessages();

  res.render("index.views.ejs", {
    messages,
    account: true,
    accountName: userName,
  });
});

module.exports = userRouter;
