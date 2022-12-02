import express from "express";
import session from "express-session";
// import sql from "./sql.js";
// import connection from "./database.js";
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

// app.post("/api/:alias", async (req, res) => {
//   if (!req.session.email) {
//     return res.status(401).send({ err: "로그인이 필요한 서비스입니다." });
//   }
//   try {
//     res.send(await reqSql.db(req.params.alias));
//   } catch (err) {
//     res.status(500).send({
//       err: "존재하지 않는 페이지 입니다.",
//     });
//   }
// });

// const reqSql = {
//   async db(alias) {
//     const query = sql[alias].query;
//     const result = await connection.query(query);
//     return result;
//   },
// };
