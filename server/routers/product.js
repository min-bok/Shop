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
    const params = req?.body?.params?.productId;

    res.send(await reqSql.db(req.params.alias, params));
  } catch (err) {
    res.status(500).send({
      err: "존재하지 않는 페이지 입니다.",
    });
  }
});

export default router;
