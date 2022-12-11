import express from "express";
import sql from "../sql.js";
import connection from "../database.js";

const router = express.Router();

const reqSql = {
  async db(alias, params) {
    const query = sql[alias].query;
    const result = await connection.query(query, params);
    return result;
  },
};

router.post("/:alias", async (req, res) => {
  // if (!req.session.email) {
  //   return res.status(401).send({ err: "로그인이 필요한 서비스입니다." });
  // }
  try {
    let params = req?.body?.params?.productId;

    let result = [];

    // params가 배열로 넘어오는 경우 ex) 장바구니 구현 등

    // insert 의 경우 -- parmas에 배열 값이 들어가야함
    // cartList의 경우 -- params 가 배열로 넘어오지만 문자열로 변환해야함
    // 두 개를 동시에 만족하려면....?
    if (Array.isArray(params)) {
      for (let i = 0; i < params.length; i++) {
        result.push(await reqSql.db(req.params.alias, params[i]));
      }
    } else {
      return res.send(await reqSql.db(req.params.alias, params));
    }
    return res.send(result);
  } catch (err) {
    res.status(500).send({
      err: "존재하지 않는 페이지 입니다.",
    });
  }
});

router.delete("/:alias", async (req, res) => {
  let params = req?.body?.productId;
  const alias = req?.params?.alias + "Delete";

  try {
    return res.send(await reqSql.db(alias, params));
  } catch (err) {
    res.status(500).send({
      err: "상품을 삭제할 수 없습니다",
    });
  }
});

router.delete("/:alias", async (req, res) => {
  let params = req?.body?.productId;
  const alias = req?.params?.alias + "Delete";

  try {
    return res.send(await reqSql.db(alias, params));
  } catch (err) {
    res.status(500).send({
      err: "상품을 삭제할 수 없습니다",
    });
  }
});

export default router;
