const express = require("express");
const path = require("node:path");
const index = require("./routes/index.routes");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/", index);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(`http://localhost:${PORT}/`);
});
