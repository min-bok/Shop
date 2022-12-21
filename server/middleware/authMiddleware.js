// 로그인 여부를 확인하는 미들웨어
const authMiddleware = (req, res, next) => {
  const path = req.params.alias;
  // 메인 페이지와 제품상세 페이지는 로그인 확인 제외
  if (
    path !== "productList" &&
    path !== "productDetail" &&
    path !== "productMainImage"
  ) {
    if (!req.session.userId) {
      return res.status(401).send({ err: "로그인이 필요한 서비스입니다." });
    }
  }
  next();
};

export default authMiddleware;
