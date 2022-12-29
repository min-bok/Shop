import express from "express";
import sql from "../sql.js";
import connection from "../database.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// DB에 요청을 보내주는 함수
const reqSql = {
  async db(alias, params) {
    const query = sql[alias].query;
    const result = await connection.query(query, params);
    return result;
  },
};

// get 요청을 처리하는 라우터
router.get("/:alias", async (req, res) => {
  try {
    const alias = req?.params?.alias;
    const params = req?.query ? req?.query : {};
    return res.send(await reqSql.db(alias, params.val));
  } catch (err) {
    res.status(500).send({
      err: "존재하지 않는 페이지 입니다.",
    });
  }
});

// post 요청을 처리하는 라우터
router.post("/:alias", authMiddleware, async (req, res) => {
  try {
    const alias = req?.params?.alias;
    const params = req?.body.data ? req?.body.data : {};
    return res.send(await reqSql.db(alias, params.val));
  } catch (err) {
    res.status(500).send({
      err: "존재하지 않는 페이지 입니다.",
    });
  }
});

// delete 요청을 처리하는 라우터
router.delete("/:alias", authMiddleware, async (req, res) => {
  try {
    const alias = req?.params?.alias;
    const params = req?.body ? req?.body : {};

    return res.send(await reqSql.db(alias, params.val));
  } catch (err) {
    res.status(500).send({
      err: "존재하지 않는 페이지 입니다.",
    });
  }
});

router.delete("/:alias", async (req, res) => {
  let params = req.body;
  const alias = req?.params?.alias;

  // console.log(params.val);
  // console.log(alias);

  try {
    return res.send(await reqSql.db(alias, params.val));
  } catch (err) {
    res.status(500).send({
      err: "상품을 삭제할 수 없습니다",
    });
  }
});

export default router;
