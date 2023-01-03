export default {
  // 제품 리스트
  productList: {
    query: `
      SELECT t1.id, t1.product_name, t1.product_price, t2.category1, t2.category2, t2.category3, t3.path 
      FROM product t1, category t2, image t3
      WHERE t1.id = t3.product_id AND t3.type=1 AND t1.category_id = t2.id
    `,
  },
  // 상세페이지 - 기본정보 및 제품 설명 이미지
  productDetail: {
    query: `
      SELECT t1.*, t2.category1, t2.category2, t2.category3, t3.path 
      FROM product t1, category t2, image t3
      WHERE t1.id = ? AND t1.id = t3.product_id AND t3.type=3 AND t1.category_id = t2.id
    `,
  },
  // 상세페이지 - 대표이미지
  productMainImage: {
    query: `
      SELECT * FROM image WHERE product_id= ? and type=2
    `,
  },
  // 제품등록 페이지 - 제품 정보
  productInsert: {
    query: `
      INSERT INTO product (product_name, product_price, delivery_price, add_delivery_price, tags, outbound_days, seller_id, category_id)
      VALUES (?,?,?,?,?,?,?,?)
    `,
  },
  // 제품등록 페이지 - 제품 이미지
  productImageInsert: {
    query: `
      INSERT INTO image (product_id, type, path)
      VALUES (?,?,?)
    `,
  },
  // 장바구니 페이지 -- 로그인 구현 후 user_id도 ?로 바꿔서 params 받아오긴
  cartList: {
    query: `
    SELECT t1. *, SUM(t2.product_quantity), t4.path
    FROM product t1, cart t2, user t3, image t4
    WHERE t1.id = t2.product_id AND t2.user_id = ? AND t2.user_id = t3.id AND t1.id = t4.product_id AND t4.type=1
    GROUP BY t1.id
    `,
  },
  cartListInsert: {
    query: `
      INSERT INTO cart (product_id, user_id, product_quantity)
      VALUES (?,?,?)
    `,
  },
  // 카트 정보 삭제
  cartListDelete: {
    query: `DELETE FROM cart WHERE product_id = ? AND user_id = ?`,
  },
  sellerList: {
    query: `select * from seller`,
  },
  // 회원가입
  signup: {
    query: `
      INSERT INTO user (email, password)
      VALUES (?,?)`,
  },
  // 회원가입 이메일 중복 체크
  duplicationCheck: {
    query: `
    select EXISTS (select * from user WHERE email=?) as success`,
  },
  // 로그인
  login: {
    query: `SELECT * FROM user WHERE email = ?`,
  },
  // 유저 정보 가져오기
  getUserData: {
    query: `SELECT * FROM user WHERE id = ?`,
  },
  // 유저 정보 수정
  updateUserData: {
    query: `UPDATE user SET name = ?, address = ?, detail_address= ?, post_code= ?, phone_number= ? WHERE id = ?`,
  },
  // 유저 비밀번호 수정
  updateUserPassword: {
    query: `UPDATE user SET password = ? WHERE id = ?`,
  },
};
