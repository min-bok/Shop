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
    const alias = req?.params?.alias;
    const params = req?.body.data ? req?.body.data : {};

    console.log(alias);
    console.log(params);
    console.log(params.val);

    // let result = [];

    // if (alias == "cartList") {
    //   let cartParams = [];

    //   for (let i = 0; i < params?.productId?.length; i++) {
    //     cartParams.push([params?.productId[i], params?.userId]);
    //   }

    //   for (let i = 0; i < cartParams.length; i++) {
    //     result.push(await reqSql.db(alias, cartParams[i]));
    //   }
    // } else {
    //   return res.send(await reqSql.db(alias, params.productId));
    // }

    return res.send(await reqSql.db(alias, params.val));
  } catch (err) {
    res.status(500).send({
      err: "존재하지 않는 페이지 입니다.",
    });
  }
});

router.delete("/:alias", async (req, res) => {
  let params = req?.body?.productId;
  const alias = req?.params?.alias;

  try {
    return res.send(await reqSql.db(alias, params));
  } catch (err) {
    res.status(500).send({
      err: "상품을 삭제할 수 없습니다",
    });
  }
});

export default router;
