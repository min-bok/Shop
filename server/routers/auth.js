import express from "express";
import sql from "../sql.js";
import connection from "../database.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const params = req.body.val;
    const query = sql["signup"].query;

    console.log(params);
    console.log(query);

    const result = await connection.query(query, params);

    return res.status(200).send({
      msg: "회원가입이 완료되었습니다.",
    });
  } catch (err) {
    res.status(400).send({
      err: "회원가입에 실패하였습니다.",
    });
  }
});

router.post("/login", async (req, res) => {
  req.session["email"] = "leehy0782@gmail.com";
  res.send("login");
});

router.post("/logout", async (req, res) => {
  req.session.destroy();
  res.send("logout");
});

export default router;
