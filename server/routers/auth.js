import express from "express";
import sql from "../sql.js";
import connection from "../database.js";

const router = express.Router();

router.post("/duplicationCheck", async (req, res) => {
  try {
    const params = req.body.val;
    const query = sql["duplicationCheck"].query;

    const result = await connection.query(query, params);

    if (result[0][0].success == 1) {
      throw new Error();
    } else {
      return res.status(200).send({
        msg: "사용할 수 있는 이메일 입니다 :)",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(504).send({
      msg: "이미 존재하는 이메일 입니다",
    });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const params = req.body.val;
    const query = sql["signup"].query;

    const result = await connection.query(query, params);

    return res.status(200).send({
      msg: "회원가입이 완료되었습니다.",
    });
  } catch (err) {
    res.status(400).send({
      msg: "회원가입에 실패하였습니다.",
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
