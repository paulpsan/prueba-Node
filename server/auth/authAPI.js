const express = require("express");
const router = express.Router();
const authController = require("./authController");

router.post("/login", (req, res, next) => {
  authController.login(req.body.username).then(token => {
    res.status(200).send({ token });
  });
});
router.get("/verify", (req, res, next) => {
  authController
    .verify(req)
    .then(() => {
      res.status(200).send({ mesage: "Verificado" });
    })
    .catch(() => {
      res.status(401).send({ mesage: "Token no valido" });
    });
});

module.exports = router;
