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

// 재사용할 수 있는 방법이 없을까
// query를 배열로 만들어서 사용하거나
// 메서드 별로 나눈다..?
const reqSqlDel = {
  async db(params) {
    const query = sql["deleteCart"].query;
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

// 재사용할 수 있도록 수정필요
router.delete("/cartList", async (req, res) => {
  let params = req?.body?.productId;
  try {
    return res.send(await reqSqlDel.db(params));
  } catch (err) {
    res.status(500).send({
      err: "상품을 삭제할 수 없습니다",
    });
  }
});

export default router;
