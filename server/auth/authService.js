const jwt = require("jsonwebtoken");
const config = require("../config");
const secret = config.jwt.secret;

function sign(data) {
  return jwt.sign(data, secret);
}

function verify(req) {
  return new Promise((resolve, reject) => {
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, secret, (err, decoded) => {
      if (err) reject();
      else resolve();
    });
  });
}

module.exports = {
  sign,
  verify
};
