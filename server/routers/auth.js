import express from "express";
import sql from "../sql.js";
import connection from "../database.js";
import bcrypt from "bcrypt";

const router = express.Router();

// 회원가입시 이메일 중복체크
router.post("/duplicationCheck", async (req, res) => {
  try {
    const params = req.body.val;
    const query = sql["duplicationCheck"].query;
    // select EXISTS (select * from user WHERE email=?) as success 쿼리를 불러옴

    const result = await connection.query(query, params);

    // success == 1이면, 이미 해당 이메일이 존재한다는 의미, 에러를 발생시킴
    if (result[0][0].success == 1) {
      throw new Error();
    } else {
      // 이메일이 중복되지않는경우 상태코드와 메시지를 반환
      return res.status(200).send({
        msg: "사용할 수 있는 이메일 입니다 :)",
      });
    }
    // 에러 -- 이메일이 중복되는 경우, 에러코드와 메시지를 반환
  } catch (err) {
    console.log(err);
    res.status(504).send({
      msg: "이미 존재하는 이메일 입니다",
    });
  }
});

// 비밀번호 저장시 암호화 구현하기
// 회원가입
router.post("/signup", async (req, res) => {
  try {
    const id = req.body.val[0];
    const password = req.body.val[1];
    const query = sql["signup"].query;
    // 비밀번호 암호화
    const encryptedPassowrd = bcrypt.hashSync(password, 10);
    const params = [id, encryptedPassowrd];
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
