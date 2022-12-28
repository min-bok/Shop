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

    return res.redirect("/api/auth/login");

    // return res.status(200).send({
    //   msg: "회원가입이 완료되었습니다.",
    // });
  } catch (err) {
    res.status(400).send({
      msg: "회원가입에 실패하였습니다.",
    });
  }
});

// 로그인
router.post("/login", async (req, res) => {
  try {
    const email = req.body.data.val[0];
    const password = req.body.data.val[1];
    const query = sql["login"].query;

    // DB에서 email 검색
    const result = await connection.query(query, email);
    const user = result[0][0];

    // 유저 정보가 존재하는 경우
    if (user) {
      // 입력받은 이메일과 저장된 유저 비밀번호가 일치하는지 비교
      const isSame = bcrypt.compareSync(password, user.password);
      // 비밀번호가 일치하면 로그인 성공
      if (isSame) {
        // 로그인 성공하면 유저 아이디를 세션에 저장
        req.session.userId = user.id;

        // 클라이언트에 유저 아이디 값과 type 반환
        return res.status(200).send({
          id: user.id,
          type: user.type,
        });
      } else {
        // 비밀번호가 일치하지 않으면 에러를 발생시킴
        throw new Error();
      }
    } else {
      // 유저 정보가 존재하지 않는 경우 에러를 발생시킴
      throw new Error();
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({
      msg: "회원을 찾을 수 없습니다.",
    });
  }
});

// 로그아웃
// 세션 스토어에서 아예 정보를 지워야할듯
router.post("/logout", async (req, res) => {
  // console.log(req.session);
  // req.session.destroy(function () {
  //   req.session;
  // });

  return res.send("logout");
});

export default router;
