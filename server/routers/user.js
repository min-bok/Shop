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

// put 요청을 처리하는 라우터
router.put("/:alias", authMiddleware, async (req, res) => {
  try {
    const alias = req?.params?.alias;
    const params = req?.body?.val ? req?.body?.val : {};

    return res.send(await reqSql.db(alias, params));
  } catch (err) {
    res.status(500).send({
      err: "수정을 완료하지 못했습니다.",
    });
  }
});

export default router;
