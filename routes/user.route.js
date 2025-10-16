const userRouter = require("express").Router();

const messages = {};

userRouter.get("/", (req, res) => {
  const { userName } = req.query;

  console.log(`/user/${userName}`);

  res.redirect(`/user/${userName}`);
});

userRouter.get("/:userName", (req, res) => {
  const { userName } = req.params;

  res.render("index.views.ejs", {
    messages: messages,
    account: true,
    accountName: userName,
  });
});

userRouter.get("/new", (req, res) => {
  res.render("index.views.ejs", { messages: messages, formOpen: true });
});

userRouter.post("/new", (req, res) => {
  messages.push({
    user: req.body.name,
    text: req.body.comment,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = userRouter;
