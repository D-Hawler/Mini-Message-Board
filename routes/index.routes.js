const index = require("express").Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

index.get("/", (req, res) => {});

index.get("/new", (req, res) => {});

module.exports = index;
