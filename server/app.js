import express from "express";
import session from "express-session";
import sql from "./sql.js";
import connection from "./database.js";
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

// fs.watchFile(__dirname + "/sql.js", (curr, prev) => {
//   console.log("sql 변경시 재시작 없이 반영");
//   delete require.cache[req.resolve("./sql.js")];
//   sql = require("./sql.js");
// });

app.post("/api/:alias", async (req, res) => {
  let sqltest = `
      SELECT t1.id, t1.product_name, t1.product_price, t2.category1, t2.category2, t2.category3, t3.path 
      FROM product t1, category t2, image t3
      WHERE t1.id = t3.product_id AND t3.type=1 AND t1.category_id = t2.id
    `;
  if (!req.session.email) {
    return res.status(401).send({ err: "로그인이 필요한 서비스입니다." });
  }
  try {
    // res.send(await reqSql.db(req.params.alias));
    res.send(await connection.query(sqltest));
  } catch (err) {
    res.status(500).send({
      err: "에러발생",
    });
  }
});

// const reqSql = {
//   async db(alias, param = [], where = "") {
//     return new Promise((resolve, reject) =>
//       dbPool.execute(sql[alias].query + where, param, (error, rows) => {
//         if (error) {
//           if (error.code != "ER_DUP_ENTRY") console.log(error);
//           resolve({
//             error,
//           });
//         } else resolve(rows);
//       })
//     );
//   },
// };
