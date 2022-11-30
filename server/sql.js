export default {
  // 제품 리스트
  productList: {
    query: `
    SELECT t1.id, t1.product_name, t1.product_price, t2.category1, t2.category2, t2.category3, t3.path 
    FROM product t1, category t2, image t3
    WHERE t1.id = t3.product_id AND t3.type=1 AND t1.category_id = t2.id
    `,
  },
  productDetail: {
    query: `
    SELECT t1.*, t2.category1, t2.category2, t2.category3, t3.path 
    FROM product t1, category t2, image t3
    WHERE t1.id = 2 AND t1.id = t3.product_id AND t3.type=3 AND t1.category_id = t2.id
    `,
  },
  productMainImage: {
    query: `
    SELECT * FROM image WHERE product_id=2 and type=2
    `,
  },
  sellerList: {
    query: `select * from seller`,
  },
};
