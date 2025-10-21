const db = require("../db/queries");

let userNAME;
let userID;

exports.userAuthorization = async (req, res) => {
  const { userName } = req.query;

  if (!userName) {
    return res.status(400).send("Missing 'userName' parameter");
  }

  const user = await db.userSearch(userName);

  userNAME = user.username;
  userID = user.id;

  res.redirect(`/user/${user.username}#${user.id}`);
};

exports.userAddComment = async (req, res) => {
  const { comment } = req.body;

  db.addComment(userID, comment);

  res.redirect(`/user/${userNAME}#${userID}`);
};
