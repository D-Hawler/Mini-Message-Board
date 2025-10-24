const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("node:path");

const { init } = require("./db/init");
const indexRouter = require("./routes/index.route");
const userRouter = require("./routes/user.route");

require("dotenv").config();
const app = express();

(async () => {
  await init();
})();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);

app.use("/user", userRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.render("error.views.ejs");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(`http://localhost:${PORT}/`);
});
