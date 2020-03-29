const authService = require("./authService");

function login(username) {
  return new Promise((resolve, reject) => {
    //comparamos si existe el usuario
    if (username === "username") return resolve(authService.sign(username));
    else reject(new Error("Informacion incorrecta"));
  });
}

function verify(req) {
  return authService.verify(req);
}
module.exports = {
  login,
  verify
};
