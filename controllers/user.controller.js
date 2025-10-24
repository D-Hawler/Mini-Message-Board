const db = require("../db/queries");

exports.userAuthorization = async (req, res) => {
  const { userName } = req.query;

  if (!userName) {
    return res.status(400).send("Missing 'userName' parameter");
  }

  const user = await db.userSearch(userName);

  res.cookie("userNAME", user.username, { maxAge: 3600 * 1000, httpOnly: true, path: "/" });
  res.cookie("userID", user.id, { maxAge: 3600 * 1000, httpOnly: true, path: "/" });

  res.redirect(`/user/${user.username}#${user.id}`);
};

exports.userAddComment = async (req, res) => {
  const { comment } = req.body;
  const userNAME = req.cookies.userNAME;
  const userID = req.cookies.userID;

  db.addComment(userID, comment);

  res.redirect(`/user/${userNAME}#${userID}`);
};
