// 로그인 여부를 확인하는 미들웨어
const authMiddleware = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).send({ err: "로그인이 필요한 서비스입니다." });
  }
  next();
};

export default authMiddleware;
