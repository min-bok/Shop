import express from "express";
import session from "express-session";
import routerApi from "./routers/index.js";

const app = express();

app.use(
  session({
    secret: "secret code",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, //쿠키 유효시간 1시간
    },
  })
);

app.use("/api", routerApi);

const server = app.listen(5000, () => {
  console.log("Sever started. port 5000.");
});
