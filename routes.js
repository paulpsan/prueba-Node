export default app => {
  app.use("/login", require("./login"));
  app.use("/login", require("./verify"));
};
