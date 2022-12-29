import path from "path";
import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import routerApi from "./routers/index.js";
import sessionObj from "./session.js";
dotenv.config();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

app.use(express.static("build"));

app.use(session(sessionObj));

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use("/api", routerApi);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

const server = app.listen(PORT, () => {
  console.log("Sever started. port 5000.");
});
