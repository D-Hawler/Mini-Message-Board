const index = require("express").Router();

const messages = [
  {
    user: "Amando",
    text: "Hi there!",
    added: new Date(),
  },
  {
    user: "Charles",
    text: "Hello World!",
    added: new Date(),
  },
];

index.get("/", (req, res) => {
  res.render("index.views.ejs", { messages: messages, formOpen: false });
});

index.get("/new", (req, res) => {
  res.render("index.views.ejs", { messages: messages, formOpen: true });
});

index.post("/new", (req, res) => {
  messages.push({ user: req.body.name, text: req.body.comment, added: new Date() });

  res.redirect("/");
});

module.exports = index;
