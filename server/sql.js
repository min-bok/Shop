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
      WHERE t1.id = 2 AND t1.id = t3.product_id AND t3.type=3 AND t1.category_id = t2.id
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
  sellerList: {
    query: `select * from seller`,
  },
};
