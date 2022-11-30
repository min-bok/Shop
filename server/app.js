import express from "express";
import session from "express-session";
import connection from "mysql";
import sql from "./sql.js";
// import fs from "fs";

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

const server = app.listen(5000, () => {
  console.log("Sever started. port 5000.");
});

// fs.watchFile(__dirname + "/sql.js", (curr, prev) => {
//   console.log("sql 변경시 재시작 없이 반영");
//   delete require.cache[req.resolve("./sql.js")];
//   sql = require("./sql.js");
// });

// DB 연결
const db = {};

const dbPool = connection.createPool(db);

app.post("/api/login", async (req, res) => {
  req.session["email"] = "leehy0782@gmail.com";
  res.send("ok");
});

app.post("/api/logout", async (req, res) => {
  req.session.destroy();
  res.send("ok");
});

app.post("/api/:alias", async (req, res) => {
  if (!req.session.email) {
    return res.status(401).send({ err: "로그인이 필요한 서비스입니다." });
  }
  try {
    res.send(await reqSql.db(req.params.alias));
  } catch (err) {
    res.status(500).send({
      err: "에러발생",
    });
  }
});

const reqSql = {
  async db(alias, param = [], where = "") {
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != "ER_DUP_ENTRY") console.log(error);
          resolve({
            error,
          });
        } else resolve(rows);
      })
    );
  },
};
