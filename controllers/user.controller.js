const db = require("../db/queries");

exports.userAuthorization = async (req, res) => {
  const { userName } = req.query;

  if (!userName) {
    return res.status(400).send("Missing 'userName' parameter");
  }

  const name = await db.userSearch(userName);

  res.redirect(`/user/${name.username}#${name.id}`);
}
