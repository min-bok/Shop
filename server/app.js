import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import routerApi from "./routers/index.js";
import sessionObj from "./session.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(session(sessionObj));

app.use(express.static("build"));

app.use(
  express.json({
    limit: "50mb",
  })
);

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.use("/api", routerApi);

const server = app.listen(PORT, () => {
  console.log("Sever started. port 5000.");
});
