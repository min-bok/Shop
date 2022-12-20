import express from "express";
import session from "express-session";
import routerApi from "./routers/index.js";
import sessionObj from "./session.js";

const app = express();

app.use(session(sessionObj));

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use("/api", routerApi);

const server = app.listen(5000, () => {
  console.log("Sever started. port 5000.");
});
