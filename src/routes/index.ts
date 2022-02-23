import resize from "../resize";

const cors = require("cors");

module.exports = function (app: any) {
  app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
      preflightContinue: true,
      optionsSuccessStatus: 204,
    })
  );
  app.use("/", resize);
};

