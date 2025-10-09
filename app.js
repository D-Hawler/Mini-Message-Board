const express = require("express");
const path = require("node:path");
const index = require("./routes/index.routes");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use("/", index);

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500);
  res.render("error.views.ejs");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(`http://localhost:${PORT}/`);
});
